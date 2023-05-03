<template>
    <div class="school">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 学校简介 -->
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="xxjjcon">
                        <p v-for="item in intro" :key="item.id">{{ item.introA }}</p>
                    </div>

                    <div class="imgMessage">
                        <ul>
                            <li v-for="items in imgmessage" :key="items.id">
                                <a href="#">
                                    <img :src="items.path" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </el-col>
        </el-row>


        <!-- 学院介绍 -->
        <!-- 就业 title -->
        <!-- <xyjycon :title="title1"></xyjycon> -->
        <!-- 学院网格图 -->
        <!-- <reseau></reseau> -->


        <!-- 办学理念 -->
        <idea></idea>
        <!-- 校园文化 -->
        <!-- 就业 title -->
        <xyjycon :title="title2"></xyjycon>
        <!-- 校园图片 -->
        <school-picture></school-picture>
        <!-- 为什么选择我 -->
        <!-- 就业 title -->
        <xyjycon :title="title3"></xyjycon>
        <!-- 图片 -->
        <con1></con1>
        <!-- 点击咨询 -->
        <inquire></inquire>
        <!-- 底部 -->
        <bottom></bottom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from '../../components/xyjycon.vue'
import reseau from './reseau.vue'
import idea from './idea.vue'
import schoolPicture from './schoolPicture.vue'
import con1 from './con1.vue'
import inquire from '../employment/inquire.vue'
import bottom from '../../components/footer/bootom.vue'

export default {
    name: 'school',
    components: {
        cephalosome,
        xyjycon,
        reseau,
        idea,
        schoolPicture,
        con1,
        inquire,
        bottom
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '学校简介',
                    titleh3: '创新职业教育引领者，以高品质就业为教学目标',
                    titlep: ['专业打造卓越  品质铸就价值']
                }
            ],
            title1: [
                {
                    id: '1',
                    titleh2: '学院介绍',
                    titleh3: '精选各大热门专业，培养被企业争抢的复合型IT人才',
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
                    titleh2: '我们的优势',
                    titleh3: '根据学生特点进行教学 激励教学 成就驱动，学生是主角，让学生学会才是最重要的',
                    // titlep: ['进思根据不同学员情况开设就业班、才高班、培优班']
                }
            ],
            intro: [
                {
                    id: 1,
                    introA: '知进教育专注于培养互联网IT行业高级应用型专业技术人才。'
                },
                {
                    id: 2,
                    introA: '致力于创新职业教育，提倡务实、创新、稳健、和谐的核心价值观。秉承以专业打造卓越，品质铸就价值为工作标准。'
                },
                {
                    id: 3,
                    introA: '知进教育以高品质就业为目标，通过专家治校，严格管理定位于高端互联网人才技能培养加学历教育。'
                },
                {
                    id: 4,
                    introA: '教学过程中，通过激励教学，成就驱动的教学方式不断提升和挖掘学员的实战能力和自我潜力的激发。'
                },
                {
                    id: 5,
                    introA: '知进教育始终以服务发展为宗旨，通过三大目标为指导，以三大体系为保障，已经为社会培养了大批领先的、高素质的高级应用型专业技术人才。'
                },
            ],
            imgmessage: [
                {
                    id: 1,
                    path: require('@/assets/xxjjimg1.png')
                },
                {
                    id: 2,
                    path: require('@/assets/xxjjimg2.png')
                },
                {
                    id: 3,
                    path: require('@/assets/xxjjimg3.png')
                },
                {
                    id: 4,
                    path: require('@/assets/xxjjimg4.png')
                },
                {
                    id: 5,
                    path: require('@/assets/xxjjimg5.png')
                },
                {
                    id: 6,
                    path: require('@/assets/xxjjimg6.png')
                },
                {
                    id: 7,
                    path: require('@/assets/xxjjimg7.png')
                },
                {
                    id: 8,
                    path: require('@/assets/xxjjimg8.png')
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
.school {
    background-color: #fff;

    .xxjjcon {
        p {
            font-size: 16px;
            color: #000;
            text-indent: 4.4em;
            margin-bottom: 25px;
        }
    }


    .imgMessage ul {
        display: flex;
        flex-wrap: wrap;


        li {
            flex-basis: 25%;
            margin-bottom: 10px;

            a {
                display: block;
                margin: 0 auto;
                width: 290px;
                height: 210px;
                overflow: hidden;

                img {
                    width: 290px;
                    height: 210px;
                    overflow: hidden;
                    transition: all .3s;
                }

                img:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
}
</style>