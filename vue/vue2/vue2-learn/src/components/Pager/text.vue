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
    handlePageChange(e) {
      console.log(e, "页码改变了");
      this.current = e;
    },
  },
};
</script>
