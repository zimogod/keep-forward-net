<template>
    <div class="headers">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="container">
                        <div class="left-wrap">
                            <div class="left">
                                <a class="left-logo" href="#">
                                    <img src="@/assets/logo1.png" alt="">
                                </a>
                            </div>
                            <div class="center">
                                <div class="compony-hope">专业打造卓越&nbsp;&nbsp;品质铸就价值</div>
                                <div class="plan-job">企业愿景——创新职业教育引领者</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="right_1">
                                <img src="@/assets/tel.png" alt="">
                            </div>
                            <div class="right_2">
                                <h1>咨询热线:</h1>
                                <div>李老师：13133269388</div>
                                <div>张校：18610272976</div>
                                <div>李校：13124408688</div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'headers',

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
.headers {
    width: 100%;
    height: 116px;

    .container {
        height: 116px;
        // line-height: 116px;
        display: flex;
        justify-content: space-between;

        .left-wrap {
            display: flex;
            justify-content: flex-start;

            .left {
                width: 340px;
                height: 114px;
                line-height: 114px;
            }

            .left .left-logo {
                display: block;
                width: 340px;
                height: 114px;
            }

            .left img {
                width: 340px;
                height: 114px;
            }

            .center {
                height: 80px;
                margin-top: 30px;
                position: relative;

                .compony-hope {
                    color: #147df6;
                    height: 40px;
                    font: 22px/40px "微软雅黑";
                    color: #000;
                    text-indent: 40px;
                    line-height: 40px;

                }

                .plan-job {
                    font: 20px/40px "楷体";
                    font-weight: 800px;
                    color: #000;
                    height: 40px;
                    text-indent: 40px;
                    line-height: 40px;
                }
            }
        }

        .center::before {
            content: '';
            width: 1px;
            height: 72px;
            position: absolute;
            left: 10px;
            top: 2px;
            background-color: #909399;
        }

        .right {
            display: flex;

            .right_1 {
                line-height: 116px;

                img {
                    width: 41px;
                    height: 52px;
                    margin-right: 10px;
                }
            }

            .right_2 {
                margin-top: 10px;


                h1 {
                    font-size: 16px;
                    font-weight: bold;
                    height: 24px;
                    color: #000;
                }

                div {
                    color: #047df6;
                    display: block;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>