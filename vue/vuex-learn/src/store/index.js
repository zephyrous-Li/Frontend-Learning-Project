import Vue from "vue";
import Vuex from "vuex";
import loginUser from "./loginUser";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { loginUser },
  strict: true, //开启严格模式
});
window.store = store;
export default store;
