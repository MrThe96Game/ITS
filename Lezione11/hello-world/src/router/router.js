import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../components/HomeView.vue";
import AboutView from "../components/AboutView.vue";
import VarView from "../components/VarView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/var", component: VarView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
