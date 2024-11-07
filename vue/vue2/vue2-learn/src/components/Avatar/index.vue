<template>
    <img class="avatar-container" :src="url" :style="{ width: size + 'px', height: size + 'px' }" alt="">
</template>


<script>
export default {
    props: {
        url: {
            type: String, // url属性必须是字符串
            Required: true // 属性必传
        },
        size: {
            type: Number,
            default: 150,
        }
    }
}
</script>


<style scoped>
.avatar-container {
    border-radius: 50%;
    /* 控制替换元素（例如 <img> 或 <video>）的内容如何适应其容器 object-fit: cover; */
    object-fit: cover;
    display: block;
}
</style>