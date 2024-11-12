<template>
  <div id="app">
    <h1>app组件</h1>
    <Pager :total="302" :current="current" @pageChange="handlePageChange" />
  </div>
</template>


<script>
import Pager from "./";
export default {
  name: "App",
  components: {
    Pager,
  },
  data() {
    return {
      current: 1,
      total: 302,
    };
  },
  methods: {
    /**
     * 处理子组件传递的数据
     * @param {Object}  e - 从子组件接收到的数据对象
     */
    handlePageChange(e) {
      console.log(e, "页码改变了");
      this.current = e;
    },
  },
};
</script>
