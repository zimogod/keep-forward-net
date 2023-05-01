<template>
    <div class="xsglcon">
        <el-row>
            <el-col :span="16" :offset="4">
                <div class="grid-content bg-purple-dark">
                    <div class="xsglcon_container">
                        <h3>教育引导为主、制度约束为辅</h3>
                        <h4>严格的学生管理：</h4>
                        <ul>
                            <li>规则意识，令行禁止</li>
                            <li>尊重学生，感恩先行</li>
                            <li>制度约束，有法可依</li>
                            <li>强身健体，积极向上</li>
                            <li>良好习惯，整齐有序</li>
                            <li>规则意识，法律观念</li>
                            <li>24小时全方位，安全第一，让学生和家长都放心</li>
                        </ul>
                    </div>
                    <div class="xsglcon_content">
                        <el-row>
                            <el-col>
                                <div class="ullist">
                                    <div v-for="(item, index) in list" :class="'wallist' + (index + 1)" :key="index">
                                        <div v-if="item.title == '' && item.path2 == ''">
                                            <img :src="item.path" alt="">
                                        </div>
                                        <div v-if="item.title != '' && item.title != null">
                                            <img :src="item.path" alt="">
                                            <span v-if="item.title">{{ item.title }}</span>
                                        </div>
                                        <div class="" v-if="item.path2 != '' && item.title == ''">
                                            <img class="img1" :src="item.path" alt="">
                                            <img class="img2" :src="item.path2" alt="">
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'xsglcon',

    data() {
        return {
            list: [
                {
                    path: require('@/assets/xsglimg1.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg2.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg3.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg4.png'),
                    path2: require('@/assets/xsglimg5.png'),
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg6.png'),
                    title: '',
                },
                {
                    path2: require('@/assets/xsglimg7.png'),
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg8.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg12.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/xsglimg11.png'),
                    path2: '',
                    title: '',
                },
                {
                    path: require('@/assets/more.png'),
                    title: '品质教学',
                },
                {
                    path: require('@/assets/xsglimg9.png'),
                    path2: '',
                    title: '',
                },

                {
                    path: require('@/assets/xsglimg10.png'),
                    path2: '',
                    title: '',
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
.xsglcon {
    .xsglcon_container {
        h3 {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: .4rem;
        }

        h4 {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 40px;
        }

        ul {
            li {
                font-size: 18px;
                margin-bottom: 18px;
            }
        }
    }

    .xsglcon_content {
        width: 100%;
        height: 1050px;
        position: absolute;
        top: -100px;
        position: relative;

        .ullist {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            min-width: 1210px;

            .wallist1 {
                margin: 140px 1px 0px 0px;
                break-inside: avoid;

                img {
                    width: 250px;
                }
            }

            .wallist2 {
                margin: 141px 0px 0px 0px;
                break-inside: avoid;

                img {}
            }

            .wallist3 {
                margin: 1px;
                break-inside: avoid;

                img {}
            }

            .wallist4 {
                margin: -46px 0px 0px 0px;
                margin-bottom: 1px;
                break-inside: avoid;
                width: 250px;

                .img1 {
                    margin-bottom: 1px;
                    display: block;
                }
            }

            .wallist5 {
                margin: -18px 0px 0px 0px;
                break-inside: avoid;

                img {}
            }

            .wallist6 {
                margin-left: 1px;
                width: 470px;
                break-inside: avoid;
                height: 351px;
            }

            .wallist7 {

                margin-left: -18px;
                break-inside: avoid;
            }

            .wallist8 {
                margin-top: -200px;
                break-inside: avoid;

                img {
                    width: 249px;
                }
            }

            .wallist9 {
                break-inside: avoid;
                margin-left: -250px;
                width: 475px;

                img {
                    width: 100%;
                }
            }

            .wallist10 {
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                width: 225px;
                height: 225px;
                break-inside: avoid;

                span {
                    margin-top: 20px;
                    display: block;
                    width: 100%;
                    font-size: 24px;
                    color: #000;
                    text-align: center;
                }

            }

            .wallist11 {
                margin-left: 2px;
                margin-right: 1px;
                break-inside: avoid;
                margin-top: -100px;
            }

            .wallist12 {
                margin-top: -100px;
                break-inside: avoid;
            }

            .wallist13 {
                break-inside: avoid;
            }
        }
    }
}
</style>