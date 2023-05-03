<template>
    <div class="patterns">
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 教育模式展示 -->
        <div class="con3list clearfix">
            <ul>
                <li v-for="(item, index) in con3list" :key="index" :class="item.content ? '' : 'inner'">
                    <div v-if="item.content">
                        <a href="javascript:;" class="text">
                            <h2 v-html="item.content"></h2>
                            <p v-for="(items, index) in item.contentp" :key="index">{{ items }}</p>
                            <div class="arrow">
                                <img :src="item.path" alt="">
                            </div>
                        </a>
                    </div>
                    <!-- <img :src="item.path" alt="" v-else> -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import xyjycon from "../../components/xyjycon.vue"

export default {
    name: 'patterns',
    components: {
        xyjycon
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '教育特色',
                    titleh3: '培养具有1~2年工作经验的高级应用型专业技术人才',
                    titlep: ['教学管理体系、教育管理体系、就业服务体系保障人人皆可成才']
                }
            ],
            con3list: [
                {
                    content: '激励教学，成就驱动',
                    contentp: ['注重实战能力', '学员潜力激发', '保障后续就业'],
                    path: require('../../assets/doubleleftarrow.png')
                },
                // {
                //     path: require('../../assets/jymsimg1.png')
                // },
                {
                    content: '感悟式素质教育',
                    contentp: ['感悟式教育：职场文化、传统文化', '爱国教育、军队文化、校园文化',],
                    path: require('../../assets/doubleleftarrow.png')
                },
                // {
                //     path: require('../../assets/jymsimg2.png')
                // },
                // {
                //     path: require('../../assets/jymsimg3.png')
                // },
                {
                    content: '就业选择',
                    contentp: ['先平台后薪资、注重平台，快速提升个人能力，提高行业地位',],
                    path: require('../../assets/doubleleftarrow.png')
                },
                // {
                //     path: require('../../assets/jymsimg4.png')
                // },
                {
                    content: '创新职业教育引领者',
                    contentp: ['知进教育以“高品质就业”为使命',],
                    path: require('../../assets/doubleleftarrow.png')
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
.patterns {
    margin-top: 80px;
    width: 100%;
    color: #fff;
    padding-bottom: 100px;
    background: url('../../assets/jymsbg.png') center no-repeat;

    /deep/.xyjycon_title {
        .line {
            background: #fff;
        }

        p {
            color: #fff;
        }
    }

    // 教育模式展示 state
    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        clear: both;
        display: block;
    }

    .con3list {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;

        ul {
            width: 100%;

            .inner::after {
                content: '';
                display: none;
            }

            li::after {
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -12px;
                border-top: 13px solid transparent;
                border-right: 13px solid #e2e1df;
                border-bottom: 13px solid transparent;
                border-left: 0px solid transparent;
            }

            li:nth-of-type(2n)::after {
                border-right: 13px solid #1a6cd1;
            }

            // li:nth-of-type(6)::after {
            //     left: 0;
            //     right: auto;
            //     border-left: 13px solid #0d7bdc;
            //     border-right: 0px solid transparent;
            // }

            // li:nth-of-type(8)::after {
            //     left: 0;
            //     right: auto;
            //     border-left: 13px solid #e2e1df;
            //     border-right: 0px solid transparent;
            // }

            li:nth-of-type(4n) {
                margin-right: 0;
            }

            li {
                float: left;
                height: 220px;
                width: 292px;
                position: relative;
                background-color: #fff;
                margin-right: 10px;

                a.text {
                    display: block;
                    padding: 30px 23px 0;

                    h2 {
                        font-weight: bold;
                        color: #000;
                        font-size: 18px;
                        line-height: 23px;
                        height: 60px;
                    }

                    p {
                        font-size: 16px;
                        color: #000;
                        line-height: 30px;
                    }

                    @keyframes hahagui {
                        0% {
                            transform: translateX(-5px);
                        }

                        100% {
                            transform: translateX(0px);
                        }
                    }

                    .arrow {
                        position: absolute;
                        width: 24px;
                        height: 25px;
                        bottom: 20px;
                        right: 20px;
                        animation: hahagui 1s infinite;
                    }
                }
            }
        }
    }

    // 教育模式展示 end
}
</style>