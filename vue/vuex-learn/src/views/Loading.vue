<template>
  <h1>正在登陆中...</h1>
</template>

<script>
export default {
  // watch:{
  // ["']"]
  // }
  created() {
    this.unWatch = this.$watch(
      () => this.$store.getters["loginUser/status"],
      (count) => {
        if (count !== "loading") {
          this.$router.push(this.$route.query.returnUrl ?? "/").catch(() => {});
        }
      },
      {
        immediate: true,
      }
    );
  },
  destroyed() {
    this.unWatch();
  },
};
</script>
