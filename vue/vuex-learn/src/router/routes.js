import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import News from "../views/News.vue";
import User from "../views/User.vue";
import Loading from "../views/Loading.vue";

export default [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/Loading",
    component: Loading,
  },
  {
    path: "/News",
    component: News,
    meta: {
      auth: true,
    },
  },
  {
    path: "/User",
    component: User,
    meta: {
      auth: true,
    },
  },
];
