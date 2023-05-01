<template>
    <div class="one clearfix">
        <div class="yuan">{{ onee.name }}</div>
        <ul>
            <li v-for="(item, index) in onee.item" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'one',
    props: ['onee'],
    // onee: [
    //             {
    //                 name: '壹',
    //                 item: [
    //                     '黎明即起，穿衣洗漱，要内外整洁',
    //                     '整理内务，打扫卫生，必亲自检点',
    //                     '一日之计，清晨时光，须按时早饭',
    //                     '晨读开始，振奋精神，惜少年时光',
    //                     '正课修身，技能操作，塑品德修养',
    //                     '课间休息，舞动青春，练健壮体魄',
    //                     '晚上自习，温故知新，成学习达人'
    //                 ]
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
.clearfix::after {
    content: '';
    height: 0;
    visibility: hidden;
    clear: both;
    display: block;
}

.one {
    width: 343px;
    height: 452px;
    border-radius: 25px;
    background: #ffe7e5 url(../../../assets/xsgykuang1.png) 0 0 no-repeat;
    background-size: 100% 100%;


    .yuan {
        width: 134px;
        height: 134px;
        font-size: 48px;
        font-weight: bold;
        color: #ed5053;
        margin: -67px auto 40px;
        line-height: 134px;
        text-align: center;
        background: url(../../../assets/oldcolor1.png) 0 0 no-repeat;
        background-size: cover;
    }

    ul {
        li {
            font-size: 16px;
            line-height: 36px;
            text-align: center;
            color: #181818;
            
        }
    }
}
</style>