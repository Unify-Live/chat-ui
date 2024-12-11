import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import Profile from "../views/Profile.vue";
import ProjectView from "../views/ProjectView.vue";
import ManagersView from "../views/ManagersView.vue";
import AuthCallbackView from "../views/AuthCallbackView.vue";
import type { RouteLocationNormalized } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: { requiresAuth: false },
  },
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

// Basic navigation guard
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('user')

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next('/login')
//   } else if (to.path === '/login' && isAuthenticated) {
//     next('/')
//   } else {
//     next()
//   }
// })

export default router;
