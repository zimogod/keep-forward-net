<template>
    <div class="bigdata">
        <!-- 头部 -->
        <headers></headers>
        <!-- 头部导航 -->
        <navs></navs>
        <div class="img">
            <img src="@/assets/210315074921163.png" alt="">
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
        <head-line :title="title4" class="current"></head-line>
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
        </div>
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
                title: '学院概况',
                content: ['伴随工业4.0的到来并随着中国制造的大力发展，智能时代已经来临，软件业成为智能系统及整个互联网领域的基础和核心，迎来最好的发展机遇，伴随着大数据、云计算及全球互联互通的发展，软件将成整个世界的核心和灵魂。软件对制造业生产效率的提升以及制造业的改革发展有着无可替代的作用，随着企业创新意识的增强，我国软件产业逐渐向产业链高端攀登，进思大数据学院大数据专业也顺时而生。进思学校大数据学院，把IT行业核心的软件开发技术与大数据应用开发技术相结合，让学生在就业时如虎添翼。学院聚集众多来自一线、深爱教育事业的精英，向学生传授IT行业最主流、最前沿的核心技术。'],
                path: '',
            },
            title1: {
                title: '专业介绍',
                content: ['大数据中国高速发展的利器：在军事管理、国家安全、信息竞争、人才培养、医疗增益、经济效益方面，大数据力拔头筹。'],
                path: [require('@/assets/sdxy--img.png')]
            },
            title2: {
                title: '大数据发展历程',
                content: ['大数据中国高速发展的利器：在军事管理、国家安全、信息竞争、人才培养、医疗增益、经济效益方面，大数据力拔头筹。'],
                path: [require('@/assets/dsjjcimg.png')]
            },
            title3: {
                title: '大数据未来发展方向',
                content: ['大数据不仅意味着海量、多样、迅捷的数据处理，更是一种颠覆的思维方式、一项智能的基础设施、一场创新的技术变革。物联网、智慧城市、增强现实(AR)与虚拟现实(VR)、区块链技术、语音识别、人工智能、数字汇流是大数据未来应用的七大发展方向。'],
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
                    '大数据属于智力人才密集型现代新型行业。大量著名企业在全国各地，主要就业去向包括信息产品与服务企业，政府企事业单位、知名互联网公司、上市软件公司、科研机构、集团公司、以及金融、其它独资、合资企业工作。担任软件测试工程师、项目经理、软件开发工程师、JAVA开发工程师、大数据开发工程师等工作岗位。',
                    '作为IT行业中核心的技术，大数据学院通过高质量的教育教学，专业的技术实训，培养出大批高质量就业的新一代软件专业技术人才。',
                    '数据定义世界、数据驱动未来。大数据时代，数据爆炸的时代，进思大数据学院大数据方向，助学子成为大数据黄金十年的佼佼者。',
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