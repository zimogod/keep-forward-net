<template>
    <el-row class="picturea clearfix">
        <el-col class="content" :span="16" :offset="4">
            <div class="li" v-for="(item, index) in list" :key="index">
                <div class="inner1">
                    <div class="img">
                        <img :src="item.path" alt="">
                    </div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.content }}</span>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'picturea',

    data() {
        return {
            list: [
                {
                    path: require('@/assets/tsysimg1.png'),
                    title: '发展速度快',
                    content: '随着互联网技术的飞速发展，传统企业所处的商业环境与规则正在被迅速颠覆，进入洗牌期。此次变革中企业若想生存发展就必须组建一支具备互联网思维与实战管理能力的运营团队。'
                },
                {
                    path: require('@/assets/tsysimg2.png'),
                    title: '未来前景好',
                    content: '网络运营是中国互联网兴起后产生的新兴职业，是中国互联网发展环境下.比较稀缺的一种人力资源，也是互联网时代不可或缺的。网络运营高级人才都将是企业稀缺的核心战略人才。'
                },
                {
                    path: require('@/assets/tsysimg3.png'),
                    title: '薪资福利好',
                    content: '月薪轻松过万。底薪只是网络运营岗位薪资构成的一部分。学生可以拿到提成的红利。薪资不再是固定的死数，能力越强，上限越高。'
                },
                {
                    path: require('@/assets/tsysimg4.png'),
                    title: '人才缺口大',
                    content: '目前国内等待互联网转型的企业超3000万家，实际具备产品，运营，设计，管理等综合实战能力的复合型网络运营人才不足50万。这就促成了庞大的市场需求。'
                },
                {
                    path: require('@/assets/tsysimg5.png'),
                    title: '行业门槛低',
                    content: '互联网转型的企业数量超3000万，实际具备产品，运营，设计，管理等综合实战能力的复合型网络运营人才不足百万。这就为年轻一代能迅速步入行业发展打开了通道。'
                },
                {
                    path: require('@/assets/tsysimg6.png'),
                    title: '社会地位高',
                    content: '白领阶层+工作环境优雅+上升空间大+压力小+工作稳定+收入高+受人尊重=网络运营。'
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
.clearfix::after {
    content: '';
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
}

.picturea {
    .content {
        background: url('@/assets/tsysimgbg.png') center center no-repeat;
        width: 1240px;
        text-align: center;



        .li:nth-of-type(3n) {
            margin-right: 0;
        }

        .li:nth-of-type(2) {
            width: 200px;
        }

        .li:nth-of-type(4) {
            margin-left: 212px;
        }

        .li:nth-of-type(1),
        .li:nth-of-type(2),
        .li:nth-of-type(3) {
            margin-bottom: 240px;
            overflow: hidden;
        }

        .li {
            float: left;
            width: 180px;
            cursor: pointer;
            margin-right: 240px;

            .inner1 {
                width: 100%;
                height: 100%;
                transition: all .7s linear;

                .img {
                    text-align: center;
                    margin-bottom: 25px;
                }

                p {
                    font-size: 20px;
                    margin-bottom: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: #000;
                }

                span {
                    display: block;
                    height: 240px;
                    line-height: 30px;
                    font-size: 16px;
                    text-align: justify;
                    color: #181818;
                    text-align: center;
                }
            }

            .inner1:hover {
                transform: rotateY(360deg);
            }
        }
    }
}
</style>