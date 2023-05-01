<template>
    <div class="web">
        <!-- 头部 -->
        <headers></headers>
        <!-- 头部导航 -->
        <navs></navs>
        <div class="img">
            <img src="@/assets/210315074902869.png" alt="">
        </div>
        <!-- 学校概况,行业前景 -->
        <survey></survey>
        <!-- 专业介绍 -->
        <career></career>
        <!-- 就业形势 -->
        <head-line :title="title" class="job"></head-line>
        <div class="titleP">学习物联网前沿技术，让你时刻占领制高点，全新课程体系，全平台、全业务、高标准、严保障，助你迈进行业前沿！</div>
        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import headers from '@/components/header/headers.vue'
import navs from '@/components/header/navs.vue'
import survey from './survey.vue'
import career from './career.vue'
import headLine from '../bigdata/headLine.vue'
import bootom from '@/components/footer/bootom.vue'

export default {
    name: 'web',
    components: {
        headers,
        navs,
        survey,
        career,
        headLine,
        bootom
    },
    data() {
        return {
            title: {
                title: '就业优势',
                content: [
                    '目前对物联网全栈开发的需求很旺盛，都是处在供小于求的情况。物联网全栈的代码都是直面用户的，重要程度不言自明，要求很高、不容闪失。团队再精简也不能精简了前端开发力量。需要物联网全栈人才的单位太多、而且呈现越来越多的势头，现在公司个个都要做网站或APP开发，都需要大量物联网全栈人才。',
                    '主要就业去向政府管理部门、科学研究机构、设计院、信息技术部门、互联网公司、软件公司等任职工作。',
                ],
                path: [require('@/assets/jyysline.png')],
            },
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.web {
    .img {
        width: 94%;
        margin: 0 auto;
        padding-top: 10px;

        img {
            width: 100%;
        }
    }

    .job {
        margin-bottom: 0;

        /deep/.item {
            p:nth-of-type(2) {
                font-size: 18px;
                font-weight: bold;
                color: #000;
            }
        }
    }

    .titleP {
        font-size: 18px;
        font-weight: bold;
        color: #000;
        text-align: center;
        margin-bottom: 100px;
    }
}
</style>