<template>
    <div class="success">
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <ul class="success_container clearfix">
            <li v-for="(item, index) in list" :key="index">
                <img :src="item.path" alt="">
                <span>{{ item.title }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import xyjycon from "../../components/xyjycon.vue"

export default {
    name: 'success',
    components: {
        xyjycon,
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '选择大于努力',
                    titleh3: '“0基础”入学，以班级为单位安排教学进度，保障一年四季皆可入职企业',
                    titlep: ['因材施教，按照不同学生特点，激发学员潜力，兴趣教学']
                }
            ],
            list: [
                {
                    path: require('../../assets/people1.png'),
                    title: '初中生'
                },
                {
                    path: require('../../assets/people2.png'),
                    title: '高中生'
                },
                {
                    path: require('../../assets/people3.png'),
                    title: '大学生'
                },
                {
                    path: require('../../assets/people4.png'),
                    title: '研究生'
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
.success::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-top: 0px solid transparent;
    border-right: 28px solid transparent;
    border-bottom: 28px solid #fff;
    border-left: 28px solid transparent;
}

.success {
    background: #408df5;
    color: #fff;
    padding-bottom: 100px;
    position: relative;



    /deep/.xyjycon_title {
        .line {
            background: #fff;
        }

        p {
            color: #fff;
        }
    }

    .clearfix::after {
        content: '';
        visibility: hidden;
        height: 0;
        display: block;
        clear: both;
    }

    .success_container {
        width: 70%;
        margin: 0 auto 50px;

        li:last-child {
            margin-right: 0;
        }

        li {
            float: left;
            width: 23%;
            height: 100%;
            margin-right: 2%;
            padding: 36px 32px 25px;
            background-color: #fff;

            span {
                font-size: 24px;
                color: #000;
                margin-left: 10px;
                vertical-align: middle;
            }
        }
    }
}
</style>