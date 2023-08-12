import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "vue-toast-notification/dist/theme-sugar.css";
import ToastPlugin from "vue-toast-notification";
import ApiService from "./services/api";
import { useUserSession } from "./stores/userSession";
import LoadingVue from "./base-components/Loading/Loading.vue";
import AppNotFound from "./base-components/AppNotFound.vue";
const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(ToastPlugin);
app.component("app-loading", LoadingVue);
app.component("app-not-found", AppNotFound);
app.mount("#app");
const userSession = useUserSession();
ApiService.init();
ApiService.mount401Interceptor();
if (userSession.isLoggedIn) {
  ApiService.setHeader();
}
