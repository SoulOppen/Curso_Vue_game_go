import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../(views/HomeView.vue"),
  },
  {
    path: "/opinions(\\d+))",
    name: "opinions",
    component: () =>
      import(/* webpackChunkName: "opinions" */ "../views/OpinionsView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
