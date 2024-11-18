/**
 * 函数防抖
 * @param {function} fn -需要防抖的函数
 * @param {number} duration -需要防抖的时长，默认为100
 */

export default function (fn, duration = 100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, duration);
  };
}
