// 数据仓库模块
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex); // 应用vuex插件

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  //同步调用方法修改仓库内数据
  mutations: {
    /**
     * 使state.count++
     *  @param {any} payload -复核，负载，调用者传来的东西，可以是任何
     */
    increase(state, payload) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
  },
  //异步调用方法修改仓库内数据(接受payload)
  //调取actions使用store.dispatch("asyncincrease")
  actions: {
    async asyncincrease(cxt) {
      await delay(1000);
      cxt.commit("increase");
    },
    async asyncdecrease(cxt) {
      await delay(1000);
      cxt.commit("decrease");
    },
  },
  //仓库内的计算属性
  getters: {},
});

export default store;
