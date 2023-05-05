<template>
    <div class="specialty">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 四大学院 -->
        <college v-for="(item, index) in list" :key="index" :college="item"></college>
        <!-- 教育模式 -->
        <patterns></patterns>
        <div class="job">
            <h2>
                就业服务
            </h2>
            <h3>
                打造职业教育高品质就业品牌
                <br>
                提供学员就业后技术支持、学员就业后工作指导、职场发展以及职位提升。
            </h3>
            <img src="../../assets/jyfwimg.png" alt="">
        </div>
        <!-- 就业 title -->
        <xyjycon :title="title1"></xyjycon>
        <!-- 小轮播和图片展示 -->
        <con2inner></con2inner>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from "../../components/xyjycon.vue"
import college from './college.vue'
import patterns from '../index/patterns.vue'
import con2inner from '../index/con2inner .vue'
import bootom from '../../components/footer/bootom.vue'

export default {
    name: 'specialty',
    components: {
        cephalosome,
        xyjycon,
        college,
        patterns,
        con2inner,
        bootom
    },
    data() {
        return {
            starte1: false,
            starte2: false,
            starte3: false,
            starte4: false,
            title1: [
                {
                    id: '1',
                    titleh2: '就业选择：先平台，后薪资',
                    titleh3: '多家企业offer到手，就业优先选择好平台、大平台，主动权在我们手里',
                    titlep: ['完善的终身就业服务，终身指导就业。让每个学生就业后都能得到保障，稳定发展，行业地位提升']
                }
            ],
            title: [
                {
                    id: '1',
                    titleh2: '知进教育三大学院',
                    titleh3: '知进教育各学院定位及简介',
                    titlep: ['创新职业教育引领者，以“高品质就业”为目标，人人皆可成才']
                }
            ],
            list: [
                {
                    path: require('../../assets/jsj.png'),
                    coollege: '计算机学院-计算机专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '训练思维、培养素质、教授企业实用技能，为学生的发展打下良好的基础。',
                        },
                        {
                            title: '学院简介：',
                            content: '计算机学院是针对14-17周岁学生设置的计算机黄埔训练营，采用独创的模块化教学。使其掌握实用的计算机技能。设计达人让学生掌握ps、ai、indEsiGn、C4D等常用设计软件，应对工作中的设计任务。新媒体模块让学生掌握视频剪辑、视频拍摄、视频特效、视频创作及运营，紧跟新媒体时代掌握新媒体应用技术。办公软件模块，让学生熟练掌握办公软件的应用，具备企业白领的通用技能。计算机语言模块，让学生掌握计算机汇编语言，达到计算机三级的水平。多模块的教学内容进夯实学生的计算基础。'
                        },
                        {
                            title: '主要课程：',
                            content: '采用独创模块化教学，四大模块涵盖视觉设计、新媒体运营、实用办公技术、计算机进阶课程等。'
                        },
                    ]
                },
                {
                    path: require('../../assets/300.jpg'),
                    coollege: '物联网学院 — 全栈专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '学院按照企业的用人标准，行业规范，打造高级应用型专业技术人才，为企业输送高端人才'
                        },
                        {
                            title: '学院简介：',
                            content: '万物互联时代的到来，物联网人才奇缺；学院顺应时代发展，针对性开设了物联网全栈专业；学院采用因材施教、激励教学、成就驱动的教学方式，把真实项目带入教学过程中，保证学生能学到符合企业用人标准的实用技能；并获得项目实操及工作经验，使每个学生都能高薪就业。'
                        },
                        {
                            title: '主要课程：',
                            content: '网页基本布局、JS动态效果实现、面向对象开发游戏、前后端交互与处理、企业后台管理系统、Vue组件化开发、React组件化开发、微信生态开发、Node.js搭建前后端中间件等课程。'
                        },
                    ]
                },
                {
                    path: require('../../assets/art.jpg'),
                    coollege: '智能学院 — 全链路专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '解决企业人才需求痛点，依托应用广泛的Python技术栈，契合市场多端应用平台，引领学生成为智能领域的全链路人才！'
                        },
                        {
                            title: '学院简介：',
                            content: '智能作为当今最热门的技术之一，已经广泛应用于医疗、金融、教育、交通运输等诸多领域，并且被认为是未来社会的核心技术。智能学院，致力于为社会培养高素养，精于技术的智能领域全链路人才，致力于解决企业人才需求痛点，依托应用广泛的Python技术栈，契合市场多端应用平台，引领学生成为智能领域的全链路人才！'
                        },
                        {
                            title: '主要课程：',
                            content: 'Python编程、MySQL数据库、自动化测试、高级爬虫技术与应用、Linux系统操作等。'
                        },
                    ]
                },
                // {
                //     path: require('../../assets/xmt.png'),
                //     coollege: '新媒体学院 — 新媒体专业',
                //     intro: [
                //         {
                //             title: '学院定位：',
                //             content: '紧盯新媒体市场，全力打造高级新媒体人才，为各大新媒体企业输送新媒体人才'
                //         },
                //         {
                //             title: '学院简介：',
                //             content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
                //         },
                //         {
                //             title: '主要课程：',
                //             content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
                //         },
                //     ]
                // },
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
.specialty {
    background-color: #fff;

    .con2inner {
        margin-bottom: 70px
    }

    .job {
        width: 95%;
        margin: 0 auto;
        max-width: 1200px;
        color: #000000;
        margin: 60px auto;
        text-align: center;
        overflow: hidden;

        h2 {
            font-size: 60px;
            font-weight: bold;
        }

        h3 {
            line-height: 42px;
            font-size: 30px;
            margin-bottom: 60px;
        }
    }
}
</style>