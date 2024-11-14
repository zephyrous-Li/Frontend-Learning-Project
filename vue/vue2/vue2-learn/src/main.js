import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
// import "./api/test";
// 注册全局指令
import vLoading from "./directives/loading";
Vue.directives("loading", vLoading);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
