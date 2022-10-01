import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

const routes = [
  { path: "/", component: App },
  { path: "/why", component: () => import("./components/Why.vue") },
  { path: "/faq", component: () => import("./components/Faq.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
