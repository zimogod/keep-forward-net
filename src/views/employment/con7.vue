<template>
    <div class="con7">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="con7_tainer">
                        <div class="title">
                            <h2>
                                知进动态
                            </h2>
                        </div>
                    </div>
                    <div class="con7con clearfix">
                        <div class="fadeInLeft">
                            <!-- <div class="name">{{ con7.name }}</div> -->
                            <ul>
                                <li v-for="item in con7.index">
                                    <a href="#">
                                        <span>
                                            <i>{{ item.id }}</i>
                                            {{ item.title }}
                                        </span>
                                        <span>{{ item.timer }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="fadeInRight">
                            <!-- <div class="name">{{ con8.name }}</div> -->
                            <ul>
                                <li v-for="item in con8.index">
                                    <a href="#">
                                        <span>
                                            <i>{{ item.id }}</i>
                                            {{ item.title }}
                                        </span>
                                        <span>{{ item.timer }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'con7',
    props: ['con7', 'con8'],
    // list1: {
    //     name: '学院新闻',
    //     name1: '学院新闻',
    //     index: [
    //         {
    //             id: 1,
    //             title: ' 国内IT产业未来可期，进思终生教育培育人才！',
    //             timer: '2022/12/05'
    //         },
    //     ]
    // }
    data() {
        return {
        };
    },

    mounted() {
        console.log(this.con7)
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.con7 {
    padding-bottom: 60px;

    .con7_tainer {
        .title {
            width: 100%;
            color: #000000;
            margin: 60px auto;
            text-align: center;
            overflow: hidden;

            h2 {
                margin-bottom: 25px;
                font-size: 60px;
                font-weight: bold;
            }
        }
    }

    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }

    .con7con {
        width: 100%;
        margin-left: 15px;

        .fadeInLeft,
        .fadeInRight {
            width: 50%;
            float: left;

            .name::after {
                content: '';
                position: absolute;
                left: 50%;
                bottom: 0;
                margin-left: -40px;
                width: 80px;
                height: 4px;
                background: #000;
            }

            .name {
                width: 125px;
                text-align: center;
                font-size: 30px;
                font-weight: bold;
                color: #000;
                padding-bottom: 32px;
                margin: 0px 0px 55px 200px;
                position: relative;
            }

            ul {
                li {
                    width: 95%;
                    height: 75px;
                    padding-right: 74px;
                    overflow: hidden;

                    a:hover span:nth-of-type(2) {
                        color: #408df5;
                    }

                    a {
                        width: 100%;
                        height: 75px;
                        line-height: 75px;
                        display: flex;
                        justify-content: space-between;
                        align-self: start;
                        position: relative;


                        span:nth-of-type(1) {
                            font-size: 18px;
                            color: #000;
                            transition: all .3s linear;
                            position: relative;
                            padding-left: 40px;

                            i {
                                position: absolute;
                                width: 25px;
                                height: 25px;
                                line-height: 25px;
                                text-align: center;
                                background: #408df5;
                                color: #fff;
                                font-size: 18px;
                                left: 0;
                                top: 50%;
                                margin-top: -13px;
                                font-style: normal;
                                border-radius: 2px;
                            }
                        }

                        span:nth-of-type(1):hover {
                            padding-left: 50px;
                            color: #408df5;
                        }

                        span:nth-of-type(2) {
                            text-align: right;
                            font-size: 16px;
                            color: #898989;
                        }
                    }
                }
            }
        }
    }
}
</style>