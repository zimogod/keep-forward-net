<template>
    <div class="con2inner">
        <div class="container clearfix">
            <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="460px">
                    <el-carousel-item v-for="item in imgs" :key="item">
                        <h3 class="small">
                            <img :src="item" alt="">
                            <span>名企招聘会</span>
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <ul class="list">
                    <li class="lis" v-for="(item, index) in imgs2" :key="index">
                        <a href="javascript:;">
                            <img :src="item.path" alt="">
                            <p>{{ item.title }}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'con2inner',

    data() {
        return {
            imgs: [
                require('../../assets/ctlefimg1.png'),
                require('../../assets/ctlefimg2.png'),
                require('../../assets/ctlefimg3.png'),
            ],
            imgs2: [
                {
                    path: require('../../assets/xiao/jy1.png'),
                    title: '杨*领 中电金信 月薪11K',
                },
                {
                    path: require('../../assets/xiao/jy2.png'),
                    title: '李*彩 爱盈利 月薪13k',
                },
                {
                    path: require('../../assets/xiao/jy3.png'),
                    title: '王*毅 北京** 月薪15k',
                },
                {
                    path: require('../../assets/xiao/jy4.png'),
                    title: '李*鑫 花**技 月薪11k',
                },
                {
                    path: require('../../assets/xiao/jy5.png'),
                    title: '李*超 中信网科 月薪13k',
                },
                {
                    path: require('../../assets/xiao/jy6.jpg'),
                    title: '黑*晨 华为科技 月薪18k',
                },
                {
                    path: require('../../assets/xiao/jy7.jpg'),
                    title: '刑* 中软国际 月薪22k',
                },
                {
                    path: require('../../assets/xiao/jy8.jpg'),
                    title: '朱*亮 北*科技 月薪14k',
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

<style>
.el-carousel__indicators {
    width: 100%;
    text-align: right;
}

.el-carousel__button {
    width: 10px;
    height: 10px;
    border-radius: 7px;
    border: 1px solid #fff;
    margin-right: 15px;
}
</style>

<style lang="less" scoped>
.con2inner {
    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        clear: both;
        display: block;
    }

    .container {
        width: 1200px;
        margin: 0 auto;

        .block {
            float: left;
            width: 500px;

            .small {
                span {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    display: block;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    color: #fff;
                    font-weight: bold;
                    font-size: 18px;
                    padding-left: 20px;
                    background-color: rgba(0, 0, 0, .7);
                }
            }
        }

        .right {
            width: 700px;
            float: right;

            .list {
                width: 100%;
                height: 500px;

                li:hover {

                    transform: scale(1.1);
                    z-index: 999;
                    position: relative;
                    box-shadow: 0 0 20px 0 rgba(64, 141, 245, .7);
                }

                li {
                    width: 168px;
                    height: 225px;
                    margin: 0px 0px 10px 7px;
                    float: left;
                    transition: all 0.3s ease-in-out;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        position: relative;

                        img {
                            width: 168px;
                            height: 100%;
                        }

                        p {
                            width: 100%;
                            height: 45px;
                            line-height: 45px;
                            background: rgba(0, 0, 0, .6);
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            font-size: 12px;
                            color: #fff;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
</style>