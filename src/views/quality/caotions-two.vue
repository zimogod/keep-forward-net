<template>
    <div class="caotions-two">
        <div class="container clearfix">
            <div class="yuan">
                <img :src="caotionsTwo.path" alt="">
            </div>
            <h6>{{ caotionsTwo.title }}</h6>
            <p>{{ caotionsTwo.content1 }} </p>
            <p>{{ caotionsTwo.content2 }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['caotionsTwo'],
    // caotionsTwo: [
    //             {
    //                 path: require('../../assets/agjy_icon1.png'),
    //                 title: '感恩祖国',
    //                 content1: '》国泰民安，没有战火纷飞，和平年代，安居乐业',
    //                 content2: '》因为国家的壮大：我们的未来/人生精彩无限',
    //             },
    //         ]
    name: 'caotions-two',

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
.caotions-two {
    margin-top: 70px;

    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        clear: both;
        display: block;
    }

    .container {
        width: 290px;
        height: 360px;
        background: url(../../assets/oldsmallbg.png) center center no-repeat;
        background-size: 270px;
        background-color: #fef4f5;

        .yuan {
            width: 132px;
            height: 132px;
            margin: -61px auto 25px;
        }

        h6 {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            text-align: left;
            font-size: 16px;
            line-height: 30px;
            padding: 0 30px;
            margin-bottom: 15px;
        }
    }
}
</style>