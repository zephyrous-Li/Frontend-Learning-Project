import "./mock";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "./router";
import store from "./store";
// import "./api/test";
// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
Vue.directives("loading", vLoading);
Vue.directives("lazy", vLazy);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
