<template>
    <div class="bigdata">
        <!-- 头部 -->
        <headers></headers>
        <!-- 头部导航 -->
        <navs></navs>
        <div class="img">
            <img src="@/assets/aipic.jpg" alt="">
        </div>
        <!-- 学校概况 -->
        <head-line :title="title"></head-line>
        <!-- 专业介绍 -->
        <head-line :title="title1"></head-line>
        <!-- 大数据发展历程 -->
        <head-line :title="title2"></head-line>
        <!-- 大数据发展方向 -->
        <div class="one">
            <head-line :title="title3"></head-line>
        </div>
        <!-- 特色优势 -->
        <!-- <head-line :title="title4" class="current"></head-line>
        <p class="two">在进思，大数据学院培养的是软件技术+大数据技术+云计算技术高端复合型工程师！</p>
        <div class="three">
            <img src="@/assets/jsrhxtitle.png" alt="">
        </div>
        <p class="four">
            软件、大数据、云计算三项技术融合后学习深度虽然加强，但是降低了学生学习难度。在教学过程中，应用全项目驱动、深度模拟企业办公环境，并且高度注重实践能力，从而提高学生学习兴趣，让学生趣学编程，最终成为站在金字塔顶端的人才。
        </p>
        <div class="three">
            <img src="@/assets/dsjfwtitle.png" alt="">
        </div>
        <div class="three">
            <img src="@/assets/dsjfwimg.png" alt="">
        </div> -->
        <!-- 就业单位与岗位 -->
        <head-line :title="title5"></head-line>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import headers from '@/components/header/headers.vue'
import navs from '@/components/header/navs.vue'
import headLine from './headLine.vue'
import bootom from '@/components/footer/bootom.vue'

export default {
    name: 'bigdata',
    components: {
        headers,
        navs,
        headLine,
        bootom
    },
    data() {
        return {
            title: {
                title: '智能学院介绍',
                content: ['智能作为当今最热门的技术之一，已经广泛应用于医疗、金融、教育、交通运输等诸多领域，并且被认为是未来社会的核心技术。智能学院，致力于为社会培养高素养，精于技术的智能领域全链路人才，致力于解决企业人才需求痛点，依托应用广泛的Python技术栈，契合市场多端应用平台，引领学生成为智能领域的全链路人才！。'],
                path: '',
            },
            title1: {
                title: '专业介绍',
                content: ['人工智能，简单来理解，是利用计算机实现人类智能。开发目的是使机器能够胜任一些通常需要人类智能才能完成的复杂工作。人工智能专业在未来将会面向更加广泛的领域，会运用到各行各业，所以在未来的就业市场上需求量应该比较大，长期来看就业前景是非常好的。主要课程：Python编程，MySQL数据库，自动化测试，高级爬虫技术与应用，Linux系统操作。'],
                path: [require('@/assets/sdxy--img.png')]
            },
            title2: {
                title: '培养目标及就业方向',
                content: [
                    '培养目标：Python开发工程，软件测试工程师，应用测试工程师、测试开发工程师、智能测试工程师、全链路测试工程师。',
                    '就业方向：知名互联网公司，政府企事业单位，教育医疗水电力等全行业'
                ],
                // path: [require('@/assets/dsjjcimg.png')]
            },
            title3: {
                title: '未来发展方向及趋势',
                content: [
                    '发展速度块:人工智能将加速推动制造业行业转型升级和经济发展模式转变。人工智能的广泛应用也将在医疗、金融等垂直领域发挥重要作用。',
                    '未来前景好:人工智能技术将会成为社会发展的重要推动力。人工智能领域将迎来快速发展。因此，选择人工智能专业将会是一个非常明智的选择。',
                    '薪资福利好:月薪过万不是梦，项目奖金拿到手软，过年过节都有卡，团建旅游少不了。'],
                path: ''
            },
            title4: {
                title: '特色优势',
                content: '',
                path: [require('@/assets/gaoduanimg1.png'), require('@/assets/dsjpyimg.png')]
            },
            title5: {
                title: '就业单位与岗位',
                content: [
                    '全链路工程师属于智力人才密集型现代新型行业。大量著名企业在全国各地，主要就业去向包括信息产品与服务企业，政府企事业单位、知名互联网公司、上市软件公司、科研机构、集团公司、以及金融、其它独资、合资企业工作。担任软件测试工程师、项目经理、软件开发工程师、Python开发工程师、全链路开发工程师等工作岗位。',
                    '作为IT行业中核心的技术，智能学院通过高质量的教育教学，专业的技术实训，培养出大批高质量就业的新一代全链路专业技术人才。',
                    '开发测试一把抓、智能链路全拿下。智能的时代，知进智能学院全链路专业，助学子成为智能时代的佼佼者。',
                ],
                path: ''
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
.bigdata {

    .img {
        width: 94%;
        padding-top: 10px;
        margin: 0 auto;

        img {
            width: 100%;
        }
    }

    .one {
        background: url(@/assets/dsjfzbg.png) center 0 no-repeat;
        padding-bottom: 20px;

        .headLine {
            color: #fff;

            /deep/h2 {
                margin-top: 70px;
            }

            /deep/.line {
                background-color: #fff;
            }

            /deep/p {
                margin: 40px auto;
            }
        }
    }

    .current {
        margin-bottom: 0;
    }

    .two {
        font-size: 18px;
        line-height: 36px;
        color: #000;
        text-align: center;
        margin-bottom: 100px;
    }

    .three {
        text-align: center;
        margin: 100px auto;
    }

    .four {
        width: 95%;
        max-width: 1200px;
        font-size: 18px;
        line-height: 36px;
        color: #000;
        text-indent: 2em;
        margin: 0 auto;
        margin-top: 90px;

    }
}
</style>