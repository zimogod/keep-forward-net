<template>
    <div class="basics clearfix">
        <!-- 头部 -->
        <headers></headers>
        <!-- 导航 -->
        <navs></navs>
        <!-- 导航下方图片 -->
        <div class="banner">
            <img src="../../../assets/basepic.jpg" alt="">
        </div>
        <!-- 致天下父母 -->
        <div class="container clearfix">
            <h1>知进计算机学院，行业内的黄埔训练营</h1>
            <div class="name">计算机学院介绍</div>
            <div class="gaolou">
                <p>计算机学院是针对14-17周岁学生设置的计算机黄埔训练营，采用独创的模块化教学。使其掌握实用的计算机技能。设计达人让学生掌握ps、ai、indEsiGn、C4D等常用设计软件，应对工作中的设计任务。新媒体模块让学生掌握视频剪辑、视频拍摄、视频特效、视频创作及运营，紧跟新媒体时代掌握新媒体应用技术。办公软件模块，让学生熟练掌握办公软件的应用，具备企业白领的通用技能。计算机语言模块，让学生掌握计算机汇编语言，达到计算机三级的水平。多模块的教学内容进夯实学生的计算基础。
                </p>
            </div>
        </div>
        <!-- 基础学院学生格言 -->
        <div class="xsgy">
            <div class="xsgy_container">
                <div class="name">独创模块化教学</div>
            </div>
            <div class="xsgylist">
                <img src="../../../assets/model1.jpg" alt="">
                <img src="../../../assets/model2.jpg" alt="">
                <!-- <one :onee="item" v-for="(item, index) in onee" :key="index"></one> -->
            </div>
        </div>
        <!-- 素质课程展示 -->
        <kczs :title="title"></kczs>
        <!-- 素质课堂天天见 -->
        <!-- <quality></quality> -->
        <!-- 特色优势 -->
        <advantage></advantage>
        <!-- <h6 class="jiewei">计算机学院，采用独创模块化教学。实体项目轮岗制，能力更完善</h6> -->
        <!-- 底部 -->
        <bottom></bottom>
    </div>
</template>

<script>
import headers from '../../../components/header/headers.vue'
import navs from '../../../components/header/navs.vue'
import one from './one.vue'
import kczs from './kczs.vue'
import quality from './quality.vue'
import advantage from './advantage.vue'
import bottom from '../../../components/footer/bootom.vue'

export default {
    name: 'basics',
    components: {
        headers,
        navs,
        one,
        kczs,
        quality,
        advantage,
        bottom
    },
    data() {
        return {
            onee: [
                {
                    name: '壹',
                    item: [
                        '黎明即起，穿衣洗漱，要内外整洁',
                        '整理内务，打扫卫生，必亲自检点',
                        '一日之计，清晨时光，须按时早饭',
                        '晨读开始，振奋精神，惜少年时光',
                        '正课修身，技能操作，塑品德修养',
                        '课间休息，舞动青春，练健壮体魄',
                        '晚上自习，温故知新，成学习达人'
                    ]
                },
                {
                    name: '贰',
                    item: [
                        '离开课堂，放下手机，看窗外风景',
                        '同学好友，以诚相待，以德行天下',
                        '授业恩师，尊重有加，效程门立雪',
                        '首孝父母，兄友弟恭，传孝道文化',
                        '恶小为之，循序渐进，必过进德减',
                        '善小为之，日积月累，成贤德之人',
                    ]
                },
                {
                    name: '叁',
                    item: [
                        '干部职责，管理有方，树学生榜样',
                        '视他人事，如自己务，成同学楷模',
                        '普通学生，自我管理，为集体荣誉',
                        '日常消费，循分称家，需勤俭节约',
                        '施惠勿求回报，受恩莫忘进取',
                        '读书志在圣贤，成就美好少年',
                    ]
                }
            ],
            list: ['01.汝家有子（女）初长成',
                '02.总角到束发豆蔻好年华',
                '03.若无良师教虎落平阳谷',
                '04.若无严师管凤凰院落飞'
            ],
            list1: [
                '05.现有进思地，基础学院里',
                '06.有教且无类，因材而施教',
                '07.素质教育先行，技能培训辅助',
                '08.读书志在圣贤，成就美好少年'
            ],
            // 课程展示
            title: [
                {
                    content: '学生由被动的听到参与其中体验形成自己的感悟使学生能够 博学之、审问之、慎思之、明辨之、笃行之。',
                    title: ''
                },
                // {
                //     content: '同学们在上下五千年、国学常识等的课程中，学习远古时期三皇五帝的传说，拜读“史家之绝唱，无韵之离骚“，和司马迁一起畅游在历史的海洋，学习”秦皇汉武略输文采，唐宗宋祖稍逊风骚，一代天骄成吉思汗只识弯弓射大雕“。开启少年文化输入之门，让历史的天空照亮少年的学习之路。',
                //     title: '第一阶段：璀璨千年篇章'
                // },
                // {
                //     content: '学常识，学历史，鉴得失，知兴替。少年风采的打造，要内外兼修，所以学习往圣绝学，以圣贤的德行为榜样。学习传统文化启蒙经典，弟子规，论语等课程，知晓孔子门生三千，为何还与老子问礼？了解为何人与人之间要“父子有亲，长幼有序”？还会知晓“伦常乖舛，立见消亡”，“德不配位，必有灾殃”的道理，从而培养少年正确的价值观念，修身养性，做“仁、义、礼、智、信“的中国人。',
                //     title: '第二阶段：往圣绝学篇章'
                // },
                // {
                //     content: '中华民族号称礼仪之邦，中国少年更应知礼守矩。学礼仪，学诗词，品服装之美，秀礼仪之大，感受华夏风姿。 “仰天大笑出门去，我辈岂是蓬蒿人” 像李白一样骄傲自豪。更懂得“粗缯大布裹生涯，腹有诗书气自华”的深意。从而培养学生知礼守矩，多才多艺，博学多闻的素养。',
                //     title: '三阶段：礼乐人生篇章'
                // },
                {
                    path: require('../../../assets/jsjgwsz.jpg')
                },
                // {
                //     content: '在进思，所有课程的学习都是为让学生绽放自身光彩。与时俱进篇章，通过商务礼仪，高品质沟通等课程的学习，与前三个阶段的课程相互融合，为学生以后进入职场垫好基石。 “仰天大笑出门去，我辈岂是蓬蒿人” 像李白一样骄傲自豪。更懂得“粗缯大布裹生涯，腹有诗书气自华”的深意。从而培养学生知礼守矩，多才多艺，博学多闻的素养。',
                //     title: '第四阶段：与时俱进篇章'
                // },

                // {
                //     content: '中华文化，以“华夏为号，炎黄为旗，典章华物，经史子集，厚德载物，通天彻地”，作为每一个炎黄子孙都应该将我们优秀的民族文化，薪火相传，百世一系。“且中国传统文化博大精深，学史可以看成败、鉴得失、知兴替；学诗可以情飞扬、志高昂、人灵秀；学伦理可以知廉耻、懂荣辱、辨是非”。通过学习传统文化，不仅可以帮助少年树立正确的世界观、人生观、价值观，更有利于打造新时代少年风采。 “仰天大笑出门去，我辈岂是蓬蒿人” 像李白一样骄傲自豪。更懂得“粗缯大布裹生涯，腹有诗书气自华”的深意。从而培养学生知礼守矩，多才多艺，博学多闻的素养。',
                //     title: ''
                // },
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
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
}

.basics {
    width: 100%;

    .banner {
        width: 94%;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 70px;

        img {
            width: 100%;
        }
    }

    // 致天下父母 state
    .container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        height: 100%;

        h1 {
            font-size: 36px;
            margin-bottom: 30px;
            text-align: center;
        }

        .name {
            width: 34%;
            line-height: 93px;
            font-size: 36px;
            font-weight: bold;
            margin: 0 auto 70px;
            background: url(../../../assets/xsfmtitle.png) 0 0 no-repeat;
            background-size: 100% 100%;
            text-align: center;
        }

        .gaolou {
            width: 100%;
            height: 300px;
            padding-left: 110px;
            padding-right: 50px;
            display: flex;
            justify-content: space-between;
            // background: url(../../../assets/gaolou.png) center bottom no-repeat;
            background-size: 100% 100%;
            overflow: hidden;

            p {
                text-indent: 40px;
                font: 20px/40px "微软雅黑";
            }
        }
    }

    // 致天下父母end

    // 基础学院学生格言 state
    .xsgy {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 90px;
        overflow: hidden;

        .xsgy_container {
            width: 504px;

            margin: 0 auto;

            .name {
                width: 504px;
                margin-bottom: 150px;
                height: 93px;
                line-height: 93px;
                font-size: 36px;
                font-weight: bold;
                margin: 0 auto 70px;
                background: url(../../../assets/xsfmtitle.png) 0 0 no-repeat;
                background-size: 100% 100%;
                text-align: center;
            }
        }

        .xsgylist {
            display: flex;
            flex-flow: column nowrap;
            justify-content: space-around;

            img {
                margin-bottom: 40px;
            }
        }
    }

    // 基础学院学生格言 end

    .kczs {
        /deep/.img {
            margin-bottom: 50px;
        }
    }
}
</style>