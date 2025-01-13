import { createApp } from "vue";
import { createPinia } from "pinia";
// import App from "./App.vue";
import router from "./router/router";
import "./style.css";

import {
  create,
  NConfigProvider,
  NMessageProvider,
  NDialogProvider,
  NNotificationProvider,
  NLoadingBarProvider,
} from "naive-ui";
import AppV2 from "./AppV2.vue";

const naive = create({
  components: [
    NConfigProvider,
    NMessageProvider,
    NDialogProvider,
    NNotificationProvider,
    NLoadingBarProvider,
  ],
});

const app = createApp(AppV2);

app.use(createPinia());
app.use(router);
app.use(naive);

app.mount("#app");
