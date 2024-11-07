<template>
    <div>
        <h1>App组件</h1>
        <Avatar
            url="https://ts4.cn.mm.bing.net/th?id=OIP-C.PobTVuzuQy7tAZtvVEc3VQAAAA&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            :size=50 />
    </div>
</template>


<script>
import Avatar from './';
export default {
    name: "App",
    components: {
        Avatar
    }
}
</script>
