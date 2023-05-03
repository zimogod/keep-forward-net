<template>
    <div class="notFond">
        <div class="block">
            <h1 class="demonstration">页面跑丢了，请点击下方&nbsp;<span>按钮</span>&nbsp;回到网站首页</h1>
            <el-skeleton style="width: 100%;">
                <template slot="template">
                    <el-empty :image-size="340" description="页面跑丢了..."></el-empty>
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
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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

<style lang="less" scoped>
.notFond {
    width: 100%;
    height: 100%;
    padding: 100px;
    background-color: rgb(236, 235, 235);

    .block {
        text-align: center;
        margin: 0 auto;
        width: 80%;
        height: 90%;
        background-color: #fff;

        h1 {
            width: 100%;
            height: 100px;
            font: 26px/100px "微软雅黑";

            span {
                color: #1a6cd1;
            }
        }
    }
}
</style>