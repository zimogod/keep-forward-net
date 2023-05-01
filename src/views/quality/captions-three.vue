<template>
    <div class="captions-three">
        <div class="list clearfix">
            <div class="yuan">
                <span>{{ captionsThree.title }}</span>
            </div>
            <h6>{{ captionsThree.core }}</h6>
            <p v-for="(item, index) in captionsThree.look" :key="index">{{ item }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'captions-three',
    props: ['captionsThree'],
    // captionsThree: [
    //             {
    //                 title: "1",
    //                 core: '核心价值观-务实',
    //                 look: ['求真务实', '艰苦奋斗'],
    //             }
    //         ],
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
.captions-three {
    .clearfix::after {
        content: '';
        height: 0;
        display: block;
        visibility: hidden;
        clear: both;
    }

    .list {
        width: 281px;
        height: 330px;
        background: url(../../assets/oldbg.png);
        background-size: cover;
        background-color: #f3f2ed;

        .yuan {
            width: 132px;
            height: 132px;
            margin: -61px auto 25px;
            padding: 16px;
            background: url(../../assets/whiteyuanbg.png) 0 0 no-repeat;
            background-size: cover;

            span {
                height: 100px;
                background: #887c50;
                display: block;
                text-align: center;
                color: #fff;
                font-size: 60px;
                line-height: 100px;
                border-radius: 100px;
            }
        }

        h6 {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            text-align: center;
            margin-bottom: 15px;
            padding-left: 0;
        }
    }
}
</style>