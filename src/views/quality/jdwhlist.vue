<template>
    <div class="jdwhlist clearfix">
        <div class="left">
            <ul>
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
                <li>
                    <a href="javascript:;">
                        <img :src="list[2]" alt="">
                    </a>
                </li>
            </ul>
        </div>
        <div class="center">
            <ul>
                <li class="center_bottom_1">
                    <a href="javascript:;">
                        <img :src="list[3]" alt="">
                    </a>
                </li>
                <div class="center_bottom">
                    <ul class="center_bottom_2">
                        <li>
                            <a href="javascript:;">
                                <img :src="list[4]" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="javascript:;">
                                <img :src="list[5]" alt="">
                            </a>
                        </li>
                    </ul>
                    <div class="center_bottom_3">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <img :src="list[6]" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>
                    <a href="javascript:;">
                        <img :src="list[7]" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img :src="list[8]" alt="">
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <img :src="list[9]" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jdwhist',

    data() {
        return {
            list: [
                require('../../assets/jdwhimg1.png'),
                require('../../assets/jdwhimg2.png'),
                require('../../assets/jdwhimg3.png'),
                require('../../assets/jdwhimg4.png'),
                require('../../assets/jdwhimg5.png'),
                require('../../assets/jdwhimg7.png'),
                require('../../assets/jdwhimg6.png'),
                require('../../assets/jdwhimg8.png'),
                require('../../assets/jdwhimg9.png'),
                require('../../assets/jdwhimg10.png')
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
.clearfix::after {
    content: '';
    height: 0;
    visibility: hidden;
    clear: both;
    display: block;
}

.jdwhlist {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

   

    .left {
        float: left;
        width: 21%;
        height: 100%;
        margin-right: 1.5%;

        ul {
            width: 100%;
            height: 100%;

            li {
                width: 100%;
                height: 100%;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            li:nth-of-type(1) {
                margin-bottom: 6%;
            }

            li:nth-of-type(2) {
                margin-bottom: 6%;
            }


        }
    }

    .center {
        float: left;
        width: 55%;
        height: 100%;
        margin-right: 1.5%;

        .center_bottom_1 {
            a {
                display: block;
                height: 100%;
                width: 100%;
                margin-bottom: 3%;
            }
        }

        .center_bottom {
            display: flex;

            .center_bottom_2 {
                li:nth-of-type(1) {
                    margin-bottom: 4%;
                }

                li {
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .center_bottom_3 {
                margin-left: 4%;

                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .right {
        float: left;
        width: 21%;
        height: 100%;

        ul {
            li {
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    margin-bottom: 7%;
                }
            }

            li:last-child a {
                margin-bottom: 0;
            }
        }
    }
}
</style>