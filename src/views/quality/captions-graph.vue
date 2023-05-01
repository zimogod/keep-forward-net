<template>
    <div class="captions-graph">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark current">
                    <!-- <h1 class="animate__animated animate__bounceOutRight">An animated element</h1> -->
                    <div class="item  animate__animated animate__bounce" v-for="(item, index) in list" :key="index">
                        <div class="img">
                            <img :src="item.path" alt="">
                        </div>
                        <p>{{ item.name }}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'captions-graph',

    data() {
        return {
            list: [
                {
                    path: require('../../assets/yyshimg1.png'),
                    name: '爱国主义教育'
                },
                {
                    path: require('../../assets/yyshimg2.png'),
                    name: '传统文化'
                },
                {
                    path: require('../../assets/yyshimg3.png'),
                    name: '校园文化'
                },
                {
                    path: require('../../assets/yyshimg4.png'),
                    name: '职场文化'
                },
                {
                    path: require('../../assets/yyshimg5.png'),
                    name: '军队文化'
                },
            ]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.captions-graph {

    .current {
        display: flex;
        justify-content: space-between;

        .item {
            width: 221px;
            height: 262px;
            background: url(../../assets/oldsmallbg.png) 0 0 no-repeat;
            background-size: cover;

            .img {
                width: 100%;
                padding-top: 70%;
                position: relative;

                img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }

            p {
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                color: #000;
            }
        }
    }


}
</style>