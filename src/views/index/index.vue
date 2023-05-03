<template>
    <div class="index">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <con1></con1>
        <!-- <img src="../../assets/ad.png" alt="" class=""> -->
        <!-- 就业 title -->
        <xyjycon :title="title1"></xyjycon>
        <!-- 小轮播和图片展示 -->
        <con2inner></con2inner>
        <!-- 教育模式 -->
        <patterns></patterns>
        <!-- 就业 title -->
        <xyjycon :title="title2"></xyjycon>
        <!-- 校园文化图片 -->
        <index-picture></index-picture>
        <!-- 你离成功只差一步 -->
        <success></success>

        <!-- 学院介绍 -->
        <!-- 就业 title -->
        <!-- <xyjycon :title="title4"></xyjycon> -->
        <!-- 学院网格图 -->
        <!-- <reseau></reseau> -->
        <!-- 学院动态 -->
        <!-- <con7 :con7="list1"></con7> -->

        <!-- 部分学生就业单位 -->
        <unit></unit>
        <!-- 点击咨询 -->
        <inquire></inquire>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from "../../components/xyjycon.vue"
import con1 from "../school/con1.vue"
import con2inner from './con2inner .vue'
import patterns from './patterns.vue'
import indexPicture from './index-picture.vue'
import success from './success.vue'
import reseau from '../school/reseau.vue'
import con7 from '../employment/con7.vue'
import unit from './unit.vue'
import inquire from '../employment/inquire.vue'
import bootom from '../../components/footer/bootom.vue'


export default {
    name: 'index',
    components: {
        xyjycon,
        con1,
        con2inner,
        patterns,
        indexPicture,
        success,
        reseau,
        con7,
        unit,
        inquire,
        bootom,
        cephalosome
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '我们的优势',
                    titleh3: '根据学员特点进行教学：激励教学、成就驱动，学生是主角，让学生学会才是最重要的',
                    // titlep: ['知进根据不同学员情况开设就业班、才高班、培优班']
                }
            ],
            // title1: [
            //     {
            //         id: '1',
            //         titleh2: '月薪过万已成常态',
            //         titleh3: '企业上门，名企双选，打破传统大学生就业难的现状',
            //         titlep: ['完善的就业制度，让每个学员都有机会选择自己喜欢的公司入职，学员普遍月薪过万，年薪10万以上', '进思大型IT专场招聘会每年定期举行，为学员搭建快捷高效的双选绿色通道，在提升他们的面试能力、积累面试经验的', '同时，也帮助不同技术方向的进思学员快速就业']
            //     }
            // ],
            title1: [
                {
                    id: '1',
                    titleh2: '知进教育就业结果',
                    titleh3: '【培养高级应用型专业技术人才】',
                    titlep: ['教学稳、就业稳、发展稳、学员就业后具有稳定的发展和再就业能力']
                }
            ],
            title2: [
                {
                    id: '1',
                    titleh2: '校园文化',
                    titleh3: '“师傅” 带 “徒弟”的方式进行教学，全员关注学生，保障每个孩子都能学会',
                    titlep: ['核心价值观：务实、创新、稳健、和谐。   教学方法：激励教学 成就驱动',]
                }
            ],
            title3: [
                {
                    id: '1',
                    titleh2: '你离成功只差一步',
                    titleh3: '灵活多样的班型 满足不同人群的需求 随时入学',
                    titlep: ['无论你处于什么阶段，都可以让你高薪就业',]
                }
            ],
            // 学院介绍
            title4: [
                {
                    id: '1',
                    titleh2: '学院介绍',
                    titleh3: '精选各大热门专业，培养被企业争抢的复合型IT人才',
                }
            ],
            // 学院动态
            list1: {
                name: '学院新闻',
                name1: '学院活动',
                index: [
                    {
                        id: 1,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 2,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 3,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 4,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 5,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 6,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 7,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 8,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 9,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 10,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 11,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 12,
                        title: ' 国内IT产业未来可期，知进终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                ]
            }
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.index {
    background-color: #fff;

    .inquire {
        background-color: #fff;
    }

    .reseau {
        padding-bottom: 50px;
    }

    .con7 {
        background: #f5f5f5;
    }

}
</style>