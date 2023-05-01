<template>
    <div class="baohcon">
        <div class="baohcon_container">
            <biao-ti :title=title></biao-ti>
            <el-row>
                <el-col :span="20" :offset="2">
                    <div class="grid-content bg-purple-dark">
                        <div class="bjhhlist">
                            <div v-for="(item, index) in list" :key="index">
                                <span>
                                    {{ item.a }}
                                    <br>
                                    {{ item.b }}
                                </span>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

        </div>
    </div>
</template>

<script>
import biaoTi from './biaoti.vue'

export default {
    name: 'baohcon',
    components: {
        biaoTi,
    },
    data() {
        return {
            // 给 biaoTi 组件传值
            title: ['为就业保驾 · 为发展护航'],
            list: [
                {
                    a: '就业',
                    b: '预案'
                },
                {
                    a: '就业',
                    b: '指导'
                },
                {
                    a: '面试',
                    b: '准备'
                },
                {
                    a: '面试',
                    b: '跟踪'
                },
                {
                    a: '就业',
                    b: '跟踪'
                },
                {
                    a: '监督',
                    b: '检查'
                },
                {
                    a: '终身',
                    b: '服务'
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
.baohcon {
    margin-bottom: 140px;

    .bjhhlist {
        display: flex;
        justify-content: space-between;

        div:last-child {
            margin-right: 0;
        }

        div:first-child::before {
            content: '';
            position: absolute;
            width: 533px;
            height: 45px;
            background: url(@/assets/xuline1.png) 0 0 no-repeat;
            top: -55px;
            left: 62px;
        }

        div:first-child::after {
            content: '';
            position: absolute;
            width: 722px;
            height: 45px;
            background: url(@/assets/xuline3.png) 0 0 no-repeat;
            bottom: -55px;
            left: 62px;
        }

        div:nth-of-type(4)::after {
            content: '';
            position: absolute;
            width: 171px;
            height: 45px;
            background: url(@/assets/xuline2.png) 0 0 no-repeat;
            top: -55px;
            left: 75px;
        }

        div:nth-of-type(2) {
            background: #0e6f73;
        }

        div:nth-of-type(3) {
            background: #076bbf;
        }

        div:nth-of-type(4) {
            background: #0e4cbe;
        }

        div:nth-of-type(5) {
            background: #3a0dbc;
        }

        div:nth-of-type(6) {
            background: #7235a1;
        }

        div:nth-of-type(7) {
            background: #ff0000;
        }

        div {
            position: relative;
            width: 125px;
            height: 125px;
            margin-right: 54px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            position: relative;

            background: #02876c;

            span {
                display: block;
                font-size: 30px;
                font-weight: bold;
                color: #fff;
            }
        }
    }
}
</style>