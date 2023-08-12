import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import naive from "naive-ui";

import router from "./router";
import "./assets/css/app.css";
import "vue-toast-notification/dist/theme-sugar.css";
import ToastPlugin from "vue-toast-notification";
import ApiService from "./services/api";
import { useUserSession } from "./stores/userSession";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(ToastPlugin)
  .use(naive)
  .mount("#app");
ApiService.init();
const userSession = useUserSession();
ApiService.mount401Interceptor();
if (userSession.isLoggedIn) {
  ApiService.setHeader();
}
