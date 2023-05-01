<template>
    <div class="operation">
        <!-- 头部 -->
        <headers></headers>
        <!-- 头部导航 -->
        <navs></navs>
        <div class="one">
            <img src="@/assets/210315074931948.png" alt="">
        </div>
        <!-- 学校概况 -->
        <head-line :title="title"></head-line>
        <!-- 专业介绍 -->
        <div class="major">
            <head-line :title="title1"></head-line>
            <div class="zyjsflex">
                <div class="item">
                    <strong>培养<br>目标</strong>
                    <span>运营设计师，全栈运营，产品经理</span>
                </div>
                <div class="item">
                    <strong>就业<br>方向</strong>
                    <span>互联网公司，各大电商平台，自主创业</span>
                </div>
            </div>
        </div>
        <!-- 特色优势 -->
        <head-line :title="title2"></head-line>
        <picturea></picturea>
        <div class="three">
            <p>学网络运营，成互联网精英。赢得了城市，富得了家乡。既可做企业精英，又可当创业先锋。学网络运营，花样翻“薪”每一人！</p>
        </div>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import headers from '@/components/header/headers.vue'
import navs from '@/components/header/navs.vue'
import headLine from '../bigdata/headLine.vue'
import picturea from './picturea.vue'
import bootom from '@/components/footer/bootom.vue'

export default {
    name: 'operation',
    components: {
        headers,
        navs,
        headLine,
        picturea,
        bootom
    },
    data() {
        return {
            title: {
                title: '学院概况',
                content: ['网络运营学院打造的是复合型全栈运营人才。以复合型网络运营为主线融合运营设计，互联网运营，互联网产品三大模块，以设计，运营，产品和全栈运营为就业出口。打造懂运营懂产品的设计，懂设计懂产品的运营，懂设计懂运营的产品。将学生培养为高端复合型人才，具备一专多能驰骋职场的综合能力。'],
                path: '',
            },
            title1: {
                title: '专业介绍',
                content: ['随着移动互联网和智能终端的发展，网络运营行业近年来飞速发展，对国民经济发展的推动作用愈发凸显。而随着国内互联网成熟和革新，行业在传统业务上催生出新零售、社交电商、直播电商、新媒体运营、内容平台等更多新的业态；同时网络运营的岗位达到了数百万的人才缺口，新技术新平台的加入也是运营人员走向了复合化，复合型网络运营人才成为了互联网最炙手可热的香饽饽。'],
                path: '',
            },
            title2: {
                title: '特色优势',
                content: '',
                path: '',
            },
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.operation {
    .one {
        width: 100%;

        img {
            width: 100%;
        }
    }

    // 专业介绍 state
    .major {
        background: url('@/assets/zyjsbg.png') center 0 no-repeat;

        /deep/h2 {
            color: #fff;
            margin-top: 50px;
        }

        .headLine {
            margin-bottom: 0;
        }

        /deep/.line {
            background-color: #fff;
        }

        /deep/p {
            color: #fff;
        }

        .zyjsflex {
            width: 95%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            padding-bottom: 70px;

            .item {
                width: 580px;
                height: 160px;
                display: flex;
                align-items: center;
                color: #fff;
                background: url(@/assets/zyjsitembg.png) 0 0 no-repeat;
                background-size: 100% 100%;

                strong {
                    width: 140px;
                    text-align: center;
                    font-size: 32px;
                    font-weight: bold;
                }

                span {
                    flex: 1;
                    font-size: 21px;
                    font-weight: bold;
                    text-align: center;
                }
            }
        }

    }

    // 专业介绍 end
    .three {
        p {
            font-size: 18px;
            color: #000;
            font-weight: bold;
            text-align: center;
            margin-top: 30px;
            margin-bottom: 80px;
        }
    }
}
</style>