import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage.vue"),
  },
  {
    path: "/profile",
    component: () => import("../pages/ProfilePage.vue"),
  },
  {
    path: "/hello",
    component: () => import("../pages/HelloPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
