import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "employeeList",
    component: () => import("../views/employeeList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
