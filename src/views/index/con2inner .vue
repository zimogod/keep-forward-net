<template>
    <div class="con2inner">
        <div class="container clearfix">
            <div class="block">
                <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
                <el-carousel height="460px">
                    <el-carousel-item v-for="item in imgs" :key="item">
                        <h3 class="small">
                            <img :src="item" alt="">
                            <span>名企双选会</span>
                        </h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <ul>
                    <li v-for="(item, index) in imgs2" :key="index">
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
                    path: require('../../assets/ctrigimg1.png'),
                    title: '高*豪 易*软件 月薪20K',
                },
                {
                    path: require('../../assets/ctrigimg2.png'),
                    title: '崔*晨 北**咖 月薪15k',
                },
                {
                    path: require('../../assets/ctrigimg3.png'),
                    title: '李*海 北**数 月薪15k',
                },
                {
                    path: require('../../assets/ctrigimg4.png'),
                    title: '祖*泽 网**思 月薪12k',
                },
                {
                    path: require('../../assets/ctrigimg5.png'),
                    title: '崔*荣 中**软 月薪12k',
                },
                {
                    path: require('../../assets/ctrigimg6.png'),
                    title: '牛*扬 北**寸 月薪12k',
                },
                {
                    path: require('../../assets/ctrigimg7.png'),
                    title: '马* 中**达 月薪11.5k',
                },
                {
                    path: require('../../assets/ctrigimg8.png'),
                    title: '柴*生 北**天 月薪10k',
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
            width: 672px;
            float: right;

            ul {
                li:hover {
                    transform: scale(1.1);
                    z-index: 999;
                    position: relative;
                    box-shadow: 0 0 20px 0 rgba(64, 141, 245, .7);
                }

                li {
                    width: 168px;
                    float: left;
                    transition: all 0.3s ease-in-out;

                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        position: relative;

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