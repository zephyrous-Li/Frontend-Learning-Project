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
    /**
     * 当前所在的页码
     * @type {Number}
     * @default 1 默认为1
     */
    current: {
      type: Number,
      default: 1,
    },
    /**
     * 总数据量
     * @type {Number}
     * @default 0 默认为1
     */
    total: { type: Number, default: 0 },
    /**
     * 每页页容量
     * @type {Number}
     * @default 10 默认为10
     */
    limit: { type: Number, default: 10 },

    /**
     *  可见页码数
     * @type {Number}
     * @default 10 默认为10
     */
    visibeNumber: {
      type: Number,
      default: 10,
    },
  },
  // 计算属性
  computed: {
    /**
     * 总页码数
     * 根据总数据量total和每页页容量limit生成应该显示的总页码数。
     * @returns {Number} 页码数（向上取整）。
     */
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    /**
     * 显示页码最小数
     * 根据当前页current和可见页码数visibeNumber生成当前显示的页码最小数。
     * @returns {Number} 当前显示的页码最小数。
     */
    visibleMin() {
      // let min = this.current - Math.floor(this.visibeNumber / 2);
      // if (min < 1) {
      //   min = 1;
      // }
      // return min;
      return this.current - Math.floor(this.visibeNumber / 2) < 1
        ? 1
        : this.current - Math.floor(this.visibeNumber);
    },
    /**
     * 显示页码最大数
     * 根据当前显示的页码最小数visibleMin和总页码数pageNumber生成显示页码最大数。
     * @returns {Number} 当前显示的页码最大数。
     */
    visibleMax() {
      // let max = this.visibleMin + this.visibeNumber - 1;
      // if (max > this.pageNumber) {
      //   max = this.pageNumber;
      // }
      // return max;
      return this.visibleMin + this.visibeNumber - 1 > this.pageNumber
        ? this.pageNumber
        : this.visibleMin + this.visibeNumber - 1;
    },
    /**
     * 当前显示的页码数组
     * 根据当前显示的页码最小数visibleMin和显示页码最大数visibleMax生成当前显示的页码数组。
     * @returns {Number[]} 当前显示的页码数组
     */
    number() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    /**
     * 向父组件进行通讯
     * @emits {Object} child-event - 页码点击事件
     * @param {Object} e - 发送的数据对象
     * @param {string} pageChange - 消息内容
     */
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