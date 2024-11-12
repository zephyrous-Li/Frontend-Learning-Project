<template></template>


<script>
export default {
  data() {
    return;
  },
  //   组件注入前
  beforeCreate() {},
  //   组件注入后
  //   响应式数据已生成，开始生成vnode虚拟节点
  Create() {},
  //   生成vnode虚拟节点后，编译虚拟dom树，挂载在真实dom之前
  beforeMount() {},
  //   虚拟节点挂载在真实dom之后
  //   在此时才能操作真实dom
  mounted() {},
  //   挂载后数据发生变动，触发重新渲染
  //   数据已经变更，页面并未改变（此刻数据和挂载在dom上的同一数据不一致）
  beforeUpdate() {},
  //  发生重新渲染之后
  updated() {},
  //   销毁：不可视(v-if)，或者切换路由
  //   组件被销毁前
  //   通常销毁计时器等操作在此完成
  beforeDestroy() {},
  //   组件被销毁后
  destroyed() {},
};
</script>