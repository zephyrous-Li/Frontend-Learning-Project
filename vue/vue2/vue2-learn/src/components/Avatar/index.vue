<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{ width: size + 'px', height: size + 'px' }"
    alt=""
  />
</template>


<script>
export default {
  props: {
    /**
     * 头像的url地址
     * @type {String}  类型为字符串
     * @required  必传
     */
    url: {
      type: String,
      Required: true,
    },
    /**
     * 头像的尺寸
     * @type {Number}  类型为数字
     * @default {150} 默认值为150
     */
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>


<style scoped>
.avatar-container {
  border-radius: 50%;
  /* 控制替换元素（例如 <img> 或 <video>）的内容如何适应其容器 object-fit: cover; */
  object-fit: cover;
  display: block;
}
</style>