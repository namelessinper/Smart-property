import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui"; //用到Element需要引入
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";

import config from "@/routes/config";

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter(config);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
