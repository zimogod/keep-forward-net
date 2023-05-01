<template>
    <!-- 公共头部 -->
    <div class="cephalosome">
        <!-- 头部 -->
        <Headers></Headers>
        <!-- 头部导航 -->
        <Navs></Navs>
        <!-- 轮播图 -->
        <lun-bo></lun-bo>
    </div>
</template>

<script>
// 头部
import Headers from "./headers.vue"
// 头部导航
import Navs from './navs.vue'
// 轮播图
import lunBo from './lunbo.vue'

export default {
    name: 'cephalosome',
    components: {
        Headers,
        Navs,
        lunBo
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
</style>