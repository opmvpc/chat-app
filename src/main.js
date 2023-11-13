import { createRouter, createWebHistory } from "vue-router";
import { createApp } from "vue";

import "./style.css";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Chat from "./pages/Chat.vue";

// définition des routes
const routes = [
  { path: "/", component: Home },
  { path: "/chat", component: Chat },
];

// création du routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// création de l'app vue
const app = createApp(App);
// on donne a vue notre routeur
app.use(router);

// on monte l'application à l'élémen #app de index.html
app.mount("#app");
