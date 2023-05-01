<template>
    <div class="plan">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 学院模块 -->
        <modules :titleA='titleA'></modules>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from '../../components/xyjycon.vue'
import modules from './modules.vue'
import bootom from '../../components/footer/bootom.vue'

export default {
    name: 'plan',
    components: {
        cephalosome,
        xyjycon,
        modules,
        bootom
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '招生计划',
                    titleh3: '创新职业教育引领者',
                    titlep: ['人人皆可成才，保障高薪就业'],
                }
            ],
            titleA: [
                {
                    id: '1',
                    title: '计算机学院 - 计算机专业',
                    peson: '招生计划：200人',
                    target: '目标定位：教授计算机应用知识，为学生进入专业学院，打好基础，网页工程师',
                    path: require('@/assets/zsjhimg1.png')
                },
                {
                    id: '2',
                    title: '物联网学院 - 物联网全栈专业',
                    peson: '招生计划：400人',
                    target: '目标定位：物联网全栈工程师、高级架构师',
                    path: require('@/assets/zsjhimg2.png')
                },
                {
                    id: '3',
                    title: '人工智能学院 - 开发测试专业',
                    peson: '招生计划：268人',
                    target: '目标定位：全链路工程师，应用型工程师',
                    path: require('@/assets/zsjhimg3.png')
                },
                {
                    id: '4',
                    title: '新媒体学院 - 新媒体专业',
                    peson: '招生计划：308人',
                    target: '目标定位：新媒体工程师，全安运营工程师',
                    path: require('@/assets/zsjhimg3.png')
                }
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
.plan {
    background-color: #fff;
}
</style>