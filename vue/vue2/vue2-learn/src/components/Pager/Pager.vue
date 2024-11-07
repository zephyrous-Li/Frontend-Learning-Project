<template>
  <div class="pager-container" v-if="pageNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      @click="handleClick(n)"
      v-for="(n, i) in number"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pageNumber)"
      :class="{ disabled: current === pageNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>


<script>
export default {
  // 父组件传递过来的值
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: { type: Number, default: 0 },
    // 页容量
    limit: { type: Number, default: 10 },

    // 可见页码数
    visibeNumber: {
      type: Number,
      default: 10,
    },
  },
  // 计算属性
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },

    // 得到显示最小数字
    visibleMin() {
      let min = this.current - Math.floor(this.visibeNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    // 得到显示最大数字
    visibleMax() {
      let max = this.visibleMin + this.visibeNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    number() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    // 向父组件抛出通讯
    handleClick(e) {
      this.$emit("pageChange", e);
    },
  },
};
</script>


<style lang="less" scoped>
@import "../../styles/var.less";

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;

  a {
    color: @primary;
    margin: 0 6px;

    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }

    &.active {
      color: @words;
      font-weight: bold;
      cursor: text;
    }
  }
}
</style>