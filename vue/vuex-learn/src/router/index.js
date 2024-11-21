import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";
import store from "../store/index";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});
router.beforeEach((to, from, next) => {
  // 每当导航切换时该函数运行
  // form:从哪来
  // to:到哪去
  // next：确认规则，无参直接进入to，传参，根据参数进入新的导航
  if (to.meta.auth) {
    // 需要鉴权
    const status = store.getters["loginUser/status"];
    if (status === "loading") {
      next({
        path: "/Loading",
        query: {
          returnUrl: to.fullPath,
        },
      });
    } else if (status === "unlogin") {
      alert("该页面需要登陆，请先登陆");
      next({
        path: "/login",
        query: {
          returnUrl: to.fullPath,
        },
      });
    } else if (status === "login") {
      next();
    }
  } else {
    next();
  }
});
export default router;
