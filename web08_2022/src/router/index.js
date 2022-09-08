import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "employee",
    component: () => import("../views/employee.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
