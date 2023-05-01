<template>
    <div class="index-picture">
        <div class="container">
            <div class="left">
                <ul class="clearfix">
                    <li>
                        <a href="javascript:;">
                            <img :src="list[0]" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img :src="list[1]" alt="">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="center">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <img :src="list[2]" alt="">
                        </a>
                    </li>
                    <li class="center_bottom">
                        <div>
                            <a href="javascript:;">
                                <img :src="list[3]" alt="">
                            </a>
                        </div>
                        <div>
                            <a href="javascript:;">
                                <img :src="list[4]" alt="">
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <img :src="list[5]" alt="">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img :src="list[6]" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- <div class="bottom">
            <ul class="clearfix">
                <li class="bottom_1">
                    <a href="javascript:;">
                        <img :src="list[7]" alt="">
                    </a>
                </li>
                <li class="bottom_2">
                    <a href="javascript:;">
                        <img :src="list[8]" alt="">
                    </a>
                </li>
                <li class="bottom_3">
                    <a href="/surroundings">
                        <img :src="list[9]" alt="">
                        <span>查看更多</span>
                    </a>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'index-picture',

    data() {
        return {
            list: [
                require('../../assets/whimg1.png'),
                require('../../assets/whimg4.png'),
                require('../../assets/whimg2.png'),
                require('../../assets/whimg5.png'),
                require('../../assets/whimg6.png'),
                require('../../assets/whimg3.png'),
                require('../../assets/whimg7.png'),
                require('../../assets/whimg8.png'),
                require('../../assets/whimg9.png'),
                require('../../assets/more.png'),
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
.index-picture {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 100px;

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;

        .clearfix::after {
            content: '';
            display: block;
            visibility: hidden;
            height: 0;
            clear: both;
        }

        .left {
            width: 23.4%;
            height: 100%;

            ul {
                width: 100%;
                height: 100%;

                li {
                    a {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }

                li:nth-of-type(1) {
                    margin-bottom: 5%;
                }
            }


        }

        .center {
            height: 100%;
            width: 50%;

            ul {
                width: 100%;
                height: 100%;

                li {
                    a {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }

                li:nth-of-type(1) {
                    margin-bottom: 4%;
                    margin-top: 3%;
                }
            }



            .center_bottom {
                display: flex;

                ul {
                    width: 100%;
                    height: 100%;

                    li {
                        a {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                    }
                }

                div:nth-of-type(1) {
                    margin-right: 3%;
                }

            }
        }

        .right {
            height: 100%;
            width: 23.4%;

            ul {
                width: 100%;
                height: 100%;

                li {
                    a {
                        width: 100%;
                        height: 100%;
                        display: block;
                    }
                }

                li:nth-of-type(1) {
                    margin-bottom: 6%;
                }
            }
        }
    }

    .bottom {
        margin-top: 2%;
        width: 100%;

        ul {
            width: 100%;
            height: 100%;
            display: flex;

            .bottom_1 {
                width: 49%;
                margin-right: 1.5%;
            }

            .bottom_1,
            .bottom_2,
            .bottom_3 {
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }

            .bottom_2 {
                width: 24.5%;
                margin-right: 1.5%;
            }

            .bottom_3 {
                width: 23.5%;
                text-align: center;

                a {
                    display: block;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    span {
                        margin-top: 10px;
                        display: block;
                        font-size: 18px;
                        color: #000;
                    }
                }
            }
        }
    }
}
</style>