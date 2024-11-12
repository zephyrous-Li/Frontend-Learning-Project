// loading指令配置
// 操作真实dom，元素js或jQuery
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
  inserted() {},
  /**
   * 所在组件vnode更新时调用
   * @param {String} el -被绑定元素的真实dom
   * @param {object} binding -描述了指令中提供的信息
   */
  updata() {},
};
