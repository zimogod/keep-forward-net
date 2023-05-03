<template>
    <div class="notFond">
        <div class="block">
            <h1 class="demonstration">页面跑丢了，请点击下方&nbsp;<span>蓝色按钮</span>&nbsp;回到网站首页</h1>
            <el-skeleton style="width: 100%;">
                <template slot="template">
                    <el-empty :image-size="240" description="页面跑丢了..."></el-empty>
                </template>
            </el-skeleton>
            <el-button @click="goIndex" type="primary">回到首页</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notFond',

    data() {
        return {
        };
    },

    methods: {
        goIndex() {
            this.$router.push({
                path: '/index'
            })
        }
    },
};
</script>
<style>
.el-empty {
    padding-bottom: 40px;
}
</style>
<style lang="less" scoped>
.notFond {
    width: 100%;
    height: 100%;
    padding: 100px;
    background-color: rgb(236, 235, 235);

    .block {
        border-radius: 5px;
        text-align: center;
        margin: 0 auto;
        width: 80%;
        height: 100%;
        background-color: #fff;
        box-shadow: 10px 10px 10px #ccc;

        h1 {
            width: 100%;
            height: 100px;
            font: 20px/100px "微软雅黑";
            color: rgb(135, 134, 134);

            span {
                color: #1a6cd1;
            }
        }
    }
}
</style>