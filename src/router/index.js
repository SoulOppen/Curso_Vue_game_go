import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OpinionsView from "../views/OpinionsView.vue";
import NotFoundView from "../views/NotFoundView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opinions/:id(\\d+)",
    name: "opinions",
    props: true,
    component: OpinionsView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
