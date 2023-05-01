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
                逐步发展成为以进思职业教育大学联盟和在线职业教育
                <br>
                平台为两翼的终身职业教育综合体
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
                    titleh2: '好平台大于就业薪资',
                    titleh3: '多家企业offer到手，学员自己选择要进入的公司，主动权在我们手里',
                    titlep: ['完善的终身就业服务，终身指导就业。让每个学生就业后都能得到保障，稳定发展，行业地位提升']
                }
            ],
            title: [
                {
                    id: '1',
                    titleh2: '进思四大学院',
                    titleh3: '进思学校各学院定位及简介',
                    titlep: ['实现每一个孩子的职业梦想']
                }
            ],
            list: [
                {
                    path: require('../../assets/zyjsimg1.png'),
                    coollege: '基础学院',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '训练思维、培养素质、教授计算机应用知识，为学生进入专业学院，打好基础'
                        },
                        {
                            title: '学院简介：',
                            content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
                        },
                        {
                            title: '主要课程：',
                            content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
                        },
                    ]
                },
                {
                    path: require('../../assets/zyjsimg1.png'),
                    coollege: '物联网学院 — web全栈专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '训练思维、培养素质、教授计算机应用知识，为学生进入专业学院，打好基础'
                        },
                        {
                            title: '学院简介：',
                            content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
                        },
                        {
                            title: '主要课程：',
                            content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
                        },
                    ]
                },
                {
                    path: require('../../assets/zyjsimg1.png'),
                    coollege: '大数据学院 一 大数据专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '训练思维、培养素质、教授计算机应用知识，为学生进入专业学院，打好基础'
                        },
                        {
                            title: '学院简介：',
                            content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
                        },
                        {
                            title: '主要课程：',
                            content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
                        },
                    ]
                },
                {
                    path: require('../../assets/zyjsimg1.png'),
                    coollege: '网络运营学院 — 运营设计专业',
                    intro: [
                        {
                            title: '学院定位：',
                            content: '训练思维、培养素质、教授计算机应用知识，为学生进入专业学院，打好基础'
                        },
                        {
                            title: '学院简介：',
                            content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
                        },
                        {
                            title: '主要课程：',
                            content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
                        },
                    ]
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