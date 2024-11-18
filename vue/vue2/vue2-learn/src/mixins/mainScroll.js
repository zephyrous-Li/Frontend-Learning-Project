export default function (refValue) {
  return {
    mounted() {
      // 向事件总线注册事件setMainScroll
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      // 自身滚动时发出事件
      this.$refs["refValue"].addEventListener("scroll", this.handleMainScroll);
    },
    beforeDestroy() {
      // 组件销毁时不再监听事件
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
      this.$refs["refValue"].removeEventListener(
        "scroll",
        this.handleMainScroll
      );
      //   组件已销毁，传空
      this.$bus.$emit("mainScroll");
    },
    methods: {
      // 设置滚动高度事件，去设置dom元素的滚动高度
      handleSetMainScroll(scrollTop) {
        this.$refs[refValue].mainContainer.scrollTop = scrollTop;
      },
      handleMainScroll() {
        // 发出事件
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
    },
  };
}
