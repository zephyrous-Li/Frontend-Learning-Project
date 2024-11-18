/**
 * 事件总线
 * 监听某个事件的接口
 * 提供取消监听的接口
 * 触发事件的接口（可传递数据）
 * 触发事件后自动通知监听者
 */

/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 *  -滚动的dom元素，如果undefined，则表示dom元素已经不存在了
 *
 * 事件名：setmainScroll
 * 含义：需要设置主区域滚动条时触发
 * 参数：
 *  -滚动高度
 */

// const listeners = {};
// export default {
//   /**
//    * 监听事件
//    * @param {String} eventName -事件的名字
//    * @param {function} handler -处理函数
//    */
//   $on(eventName, handler) {
//     if (listeners[eventName]) {
//       listeners[eventName] = new Set().de;
//     }
//     listeners[eventName].add(handler);
//   },
//   /**
//    * 取消监听
//    * @param {String} eventName -事件的名字
//    * @param {function} handler -触发的事件
//    */
//   $off(eventName, handler) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   /**
//    * 触发事件
//    * @param {String} eventName -事件的名字
//    * @param {any} arg -接受参数
//    */
//   $emit(eventName, ...arg) {
//     if (!listeners[eventName]) {
//       return;
//     }
//     for (const handler of listeners[eventName]) {
//       handler(...arg);
//     }
//   },
// };

// Vue中同时也存在这些功能，可以用如下代码直接使用
import Vue from "vue";
const app = new Vue({});
Vue.prototype.$bus = app;
export default app;
