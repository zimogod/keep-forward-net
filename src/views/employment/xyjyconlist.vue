<template>
    <div class="xyjyconlist">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="xyjyconlist_content" v-for="item in list">
                        <i>{{ item.name }}</i>
                        <h1>{{ item.utile }}</h1>
                        <a href="javascript:;">点击咨询</a>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'xyjyconlist',
    props: ['list'],
    data() {
        return {

        };
    },

    mounted() {
    },
    computed: {

    },
    methods: {

    },
};
</script>

<style lang="less" scoped>
.xyjyconlist {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;

    .xyjyconlist_content:nth-of-type(4) {
        margin-right: 0;
    }

    .xyjyconlist_content {
        float: left;
        width: 271px;
        height: 305px;
        padding-top: 90px;
        border-radius: 5px;
        text-align: center;
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        background: url('@/assets/xyjybg.png') -5px -5px no-repeat;
        margin-right: 24px;

        i {
            display: block;
            margin-bottom: 30px;
            font-size: 18px;
            font-style: normal;
        }

        h1 {
            font-size: 30px;
            margin-bottom: 30px;
            font-weight: bold;
            color: #409EFF;
        }

        a {
            display: block;
            width: 160px;
            height: 40px;
            line-height: 40px;
            font-weight: normal;
            font-size: 18px;
            color: rgba(255, 255, 255, .8);
            background: #409EFF;
            transition: all .3s linear;
            margin: 0 auto;
            border-radius: 60px;
        }
    }
}
</style>