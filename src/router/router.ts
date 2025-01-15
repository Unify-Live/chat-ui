import { createRouter, createWebHistory } from "vue-router";
import ProjectsView from "@/views/ProjectsView.vue";
import Profile from "@/views/Profile.vue";
import ProjectDetailsView from "@/views/ProjectDetailsView.vue";
import ChatView from "@/views/ChatView.vue";
import AuthCallbackView from "@/views/AuthCallbackView.vue";
import IntegrationsView from "@/views/IntegrationsView.vue";
import AnalyticsView from "@/views/IntegrationsView.vue";
import ContactsView from "@/views/Profile.vue";
import PaymentView from "@/views/Profile.vue";
import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import ChatsList from "@/components/chat_list/ChatsList.vue";
import ChatDetails from "@/components/chat_details/ChatDetails.vue";
import ChatWindow from "@/components/chat/ChatWindow.vue";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/projects",
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
    path: "/project-details",
    name: "project",
    component: ProjectDetailsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/chat",
    component: ChatView,
    children: [
      {
        path: '', // Default route to chatlist
        name: 'chat',
        component: ChatsList,
      },
      {
        path: ":id/messages",
        name: "messages",
        component: ChatWindow,
        props: true,
        meta: {
          hideBottomNav: true,
          hideHeader: true,
        },
      },
      {
        path: ":id/details",
        name: "details",
        component: ChatDetails,
        props: true,
        meta: {
          hideBottomNav: true,
        },
      }

    ],
    meta: {
      requiresAuth: true,
      hideHeader: true,
    },
  },
  {
    path: "/integrations",
    name: "integrations",
    component: IntegrationsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/analytics",
    name: "analytics",
    component: AnalyticsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: ContactsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentView,
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
