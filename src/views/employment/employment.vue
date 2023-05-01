<template>
    <div class="employment">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 就业工资 -->
        <xyjyconList :list="list"></xyjyconList>
        <!-- 插图 -->
        <!-- <illu-stration></illu-stration> -->
        <!-- 就业 title -->
        <xyjycon :title="title1"></xyjycon>
        <!-- 薪资展示 -->
        <scrollx></scrollx>
        <!-- 最新就业明星 -->
        <!-- <star></star> -->
        <!-- 就业发展流程 -->
        <baohcon></baohcon>
        <!-- 平台 -->
        <!-- <terrace></terrace> -->
        <!-- 学院动态 -->
        <div>
            <con7 :con7="list1" :con8="list2"></con7>

        </div>
        <!-- 点击咨询 -->
        <inquire></inquire>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from '../../components/xyjycon.vue'
import xyjyconList from '../employment/xyjyconlist.vue'
import illuStration from './illustrantion.vue'
import scrollx from './scroll_x.vue'
import star from './star.vue'
import baohcon from './baohcon.vue'
import terrace from './terrace.vue'
import con7 from './con7.vue'
import inquire from './inquire.vue'
import bootom from '../../components/footer/bootom.vue'

export default {
    name: 'employment',
    components: {
        cephalosome,
        xyjycon,
        xyjyconList,
        illuStration,
        scrollx,
        star,
        baohcon,
        terrace,
        con7,
        inquire,
        bootom
    },
    data() {
        return {
            // 就业工资模块
            list: [
                {
                    name: '最高工资',
                    utile: '年薪86W'
                },
                {
                    name: '平均工资',
                    utile: '年薪15W'
                },
                {
                    name: '已就业人员',
                    utile: '798人'
                },
                {
                    name: '就业率',
                    utile: '100%'
                },
            ],
            // 就业 title 模块
            title: [
                {
                    id: '1',
                    titleh2: '知进教育就业结果',
                    titleh3: '【培养高级应用型专业技术人才】',
                    titlep: ['教学稳、就业稳、发展稳、学员就业后具有稳定的发展和再就业能力']
                }
            ],
            title1: [
                {
                    id: '1',
                    titleh2: '好平台大于就业薪资',
                    titleh3: '多家企业offer到手，学员自己选择要进入的公司，主动权在我们手里',
                    titlep: ['完善的终身就业服务，终身指导就业。让每个学生就业后都能得到保障，稳定发展，行业地位提升']
                }
            ],
            //  学院动态
            list1: {
                name: '知进新闻',
                index: [
                    {
                        id: 1,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 2,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 3,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 4,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    }
                ]
            },
            list2: {
                name: '学院新闻',
                index: [
                    {
                        id: 1,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 2,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 3,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    },
                    {
                        id: 4,
                        title: ' 国内IT产业未来可期，终生教育培育人才！',
                        timer: '2022/12/05'
                    }
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
.employment {
    background-color: #fff;


}
</style>