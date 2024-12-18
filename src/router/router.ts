import { createRouter, createWebHistory } from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";
import Profile from "../views/Profile.vue";
import ProjectView from "../views/ProjectView.vue";
import AuthCallbackView from "../views/AuthCallbackView.vue";
import type { RouteLocationNormalized } from "vue-router";

const routes = [
  {
    path: "/",
    name: "projects",
    component: ProjectsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/project/:id",
    name: "project",
    component: ProjectView,
    meta: { requiresAuth: true },
  },
  {
    path: "/authentik_callback",
    name: "authCallback",
    component: AuthCallbackView,
    meta: { requiresAuth: false },
    props: (route: RouteLocationNormalized) => ({ code: route.query.code }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

function return_auth_url() {
  if (window.location.href.includes("localhost")) {
    return "https://dev-auth.unify-live.com/application/o/authorize/?client_id=gtO0tgq7vpAr2UkDX5IPM0Xi768LwcQFr8ml2I96&redirect_uri=http://localhost:8080/authentik_callback&response_type=code&scope=openid%20email%20profile%20offline_access&prompt=consent";
  } else if (window.location.href.includes("dev-chat-ui.unify-live.com")) {
    return "https://dev-auth.unify-live.com/application/o/authorize/?client_id=gtO0tgq7vpAr2UkDX5IPM0Xi768LwcQFr8ml2I96&redirect_uri=https://dev-chat-ui.unify-live.com/authentik_callback&response_type=code&scope=openid%20email%20profile%20offline_access&prompt=consent";
  }
  return "/WRONG_AUTH_REDIRECY_URL";
}

router.beforeEach((to, _, next) => {
  const isTokenExpiredResult = isTokenExpired(
    localStorage.getItem("userToken"),
  );
  if (to.path.startsWith("/authentik_callback")) {
    next();
    return;
  }
  if (!isTokenExpiredResult) {
    next();
    return;
  }
  if (to.meta.requiresAuth && isTokenExpiredResult) {
    window.location.href = return_auth_url();
    next(false);
  }
});

function isTokenExpired(token: string | null): boolean {
  console.log(token);
  if (!token) return true;
  if (token === null) return true;

  try {
    const payloadBase64 = token.split(".")[1];
    if (!payloadBase64) return true;
    const payload = JSON.parse(atob(payloadBase64));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp && payload.exp < now;
  } catch (e) {
    return true;
  }
}

export default router;
