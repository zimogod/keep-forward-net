<template>
    <div class="kczs">
        <div class="name">感悟式素质教育</div>
        <div class="arc">
            <div v-for="(item, index) in title" :key="index">
                <strong>{{ item.title }}</strong>
                <p>
                    {{ item.content }}
                </p>
                <div class="img" v-if="item.path">
                    <img :src="item.path" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'kczs',
    props: ['title'],
    // title: [
    //             {
    //                 content: '基础学院素质教育通过文化素养课程和技能培训课程，来培养学生丰富的文化素养和良好的个性品格，从而成为“阳光，开朗，职业，有情怀，有责任”的美好青年。',
    //                 title: ''
    //             },
    //         ]
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
.kczs {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

    .name {
        width: 504px;
        margin-bottom: 150px;
        height: 93px;
        line-height: 93px;
        font-size: 36px;
        font-weight: bold;
        margin: 0 auto 70px;
        background: url(../../../assets/xsfmtitle.png) 0 0 no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin-top: 100px;
    }

    .arc {
        p {
            font-size: 18px;
            line-height: 36px;
            color: #000;
            text-indent: 2em;
            margin-bottom: 40px;
        }

        strong {
            font-size: 18px;
            display: block;
            font-weight: bold;
            margin-bottom: 20px;
        }
    }
}
</style>