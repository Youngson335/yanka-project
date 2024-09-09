import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import tg from "./telegram.js";

const app = createApp(App);

app.use(store).use(router).use(tg).mount("#app");

console.log(tg);
