import { createRouter, createWebHistory } from "vue-router";
import ProjectsView from "../views/ProjectsView.vue";
import Profile from "../views/Profile.vue";
import ProjectView from "../views/ProjectView.vue";
import ManagersView from "../views/ManagersView.vue";
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
    path: "/project/:id/managers",
    name: "managers",
    component: ManagersView,
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


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  console.log(isAuthenticated);
  if (to.meta.requiresAuth && !isAuthenticated) {
    window.location.href = 'http://localhost:9000/application/o/authorize/?client_id=gtO0tgq7vpAr2UkDX5IPM0Xi768LwcQFr8ml2I96&redirect_uri=http://localhost:8080/authentik_callback&response_type=code&scope=openid%20email%20profile'
    next(false);
  } else if (to.path === 'http://localhost:9000/application/o/authorize/?client_id=gtO0tgq7vpAr2UkDX5IPM0Xi768LwcQFr8ml2I96&redirect_uri=http://localhost:8080/authentik_callback&response_type=code&scope=openid%20email%20profile' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router;
