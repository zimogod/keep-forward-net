<template>
    <div class="headLine">
        <h2>{{ title.title }}</h2>
        <div class="line"></div>
        <div v-if="title.content" class="item">
            <p v-for="(item, index) in title.content" :key="index">{{ item }}</p>
        </div>
        <div v-if="title.path" class="img">
            <img :src="item" alt="" v-for="(item, index) in title.path" :key="index">
        </div>
    </div>
</template>

<script>
export default {
    name: 'headLine',
    props: ['title'],
    // title: {
    //             title: '学院概况',
    //             content: ['伴随工业4.0的到来并随着中国制造的大力发展，智能时代已经来临，软件业成为智能系统及整个互联网领域的基础和核心，迎来最好的发展机遇，伴随着大数据、云计算及全球互联互通的发展，软件将成整个世界的核心和灵魂。软件对制造业生产效率的提升以及制造业的改革发展有着无可替代的作用，随着企业创新意识的增强，我国软件产业逐渐向产业链高端攀登，进思大数据学院大数据专业也顺时而生。进思学校大数据学院，把IT行业核心的软件开发技术与大数据应用开发技术相结合，让学生在就业时如虎添翼。学院聚集众多来自一线、深爱教育事业的精英，向学生传授IT行业最主流、最前沿的核心技术。'],
    //             path:[],
    //         },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.headLine {
    width: 95%;
    max-width: 1200px;
    color: #000000;
    margin: 60px auto;
    overflow: hidden;

    h2 {
        font-size: 36px;
        font-weight: bold;
        text-align: center;
    }

    .line {
        width: 80px;
        height: 4px;
        border-radius: 4px;
        background: #000000;
        margin: 0 auto;
        margin-bottom: 60px;
    }

    p {
        font-size: 18px;
        line-height: 36px;
        text-indent: 2em;
        margin-bottom: 40px;
    }

    .img {
        text-align: center;

        img {
            margin-bottom: 70px;
        }
    }
}
</style>