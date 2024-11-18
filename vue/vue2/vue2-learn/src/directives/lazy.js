import eventBus from "../eventBus";
import debounce from "@/utils/debounce";

let images = [];
/**
 * 处理单张图片
 *  @param {String} img -被处理数组中的图片
 */
function setImage(img) {
  //  先全部赋值为默认图片
  img.dom.src = "";
  //处理图片
  //   图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height || rect.top <= clientHeight) {
    //在视口范围内,进行加载
    const tempImg = new Image();
    tempImg.onload = function () {
      img.dom.src = img.src;
    };
    tempImg.src = img.src;
    images = images.filter((i) => i !== img);
  }
}
/**
 * 处理显示图片数组
 */
function setImages() {
  for (const img of images) {
    setImage(img);
  }
}
function handeScroll() {
  setImages();
}
eventBus.$on("mainScroll", debounce(handeScroll, 50));
export default {
  /**
   * 只被调用一次，指令第一次绑定到元素调用，进行一次初始化设置
   * @param {String} el -被绑定元素的真实dom
   * @param {object} binding -描述了指令中提供的信息
   */
  bind(el, binding) {},
  /**
   * 被绑定元素插入父节点时调用
   * @param {String} el -被绑定元素的真实dom
   * @param {object} binding -描述了指令中提供的信息
   */
  inserted(el, binding) {
    const img = {
      dom: el,
      src: binding.value,
    };
    images.push(img);
    setImage(img);
  },
  /**
   * 所在组件vnode更新时调用
   * @param {String} el -被绑定元素的真实dom
   * @param {object} binding -描述了指令中提供的信息
   */
  updata() {},
  /**
   * 指令与元素解绑时调用
   * @param {String} el -被绑定元素的真实dom
   * @param {object} binding -描述了指令中提供的信息
   */
  unbind(el) {
    images = images.filter((img) => img.dom !== el);
  },
};
