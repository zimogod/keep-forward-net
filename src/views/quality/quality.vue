<template>
    <div class="quality">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <div class="title">
            <el-row>
                <el-col :span="22" :offset="1">
                    <div class="grid-content bg-purple-dark">
                        <p>
                            {{ title }}
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 培养目标 -->
        <el-row>
            <el-col :span="18" :offset="3">
                <div class="grid-content bg-purple-dark">
                    <div class='tuwen'>
                        <span v-for="item in title1">{{ item }}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 概括 -->
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="contentA">
                        <p>进思统一开发素质教育课程体系，分层级、分阶段，统一组织实施，素质教育课程内容可以用“一育四化”来概括。</p>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 一育四化标题 -->
        <captions :captions="captions"></captions>
        <!-- 一育四化动图 -->
        <captions-graph></captions-graph>
        <!-- 一育 -->
        <captions-one :captionsA="captionsA">
            <template>
                <p class="currentA">
                    {{ captionsB[0] }}
                </p>
            </template>
        </captions-one>
        <!-- 一育动图 -->
        <div class="caotionsTwo">
            <caotions-two :caotionsTwo="item" v-for="(item, index) in caotionsTwo" :key="index"></caotions-two>
        </div>
        <!-- 四化之一 传统文化 -->
        <captions-one :captionsA="captionsC">
            <template>
                <p class="currentA">
                    {{ captionsB[1] }}
                </p>
            </template>
        </captions-one>
        <div class="four-ctwh">
            <el-row>
                <el-col :span="16" :offset="4">
                    <div class="grid-content bg-purple-dark four-ctwh-1">
                        <img :src="filial.path" alt="">
                        <h5>{{ filial.title }}</h5>
                        <span>{{ filial.ancient }}</span>
                        <span style="padding-left: 485px;">{{ filial.work }}</span>
                        <span>{{ filial.sumup }}</span>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 四化之二 校园文化 -->
        <captions-one :captionsA="captionsD">
            <template>
                <div class="captionsD">
                    <p>
                        <span>核心价值观：</span>
                        务实，诚信，感恩，敬业。
                    </p>
                    <p>
                        <span> 态度：</span>
                        积极思维，正确归因，励新超越。
                    </p>
                </div>
            </template>
        </captions-one>
        <div class="four">
            <cations-three :captionsThree="item" v-for="(item, index) in captionsThree" :key='index'></cations-three>
        </div>
        <!-- 四化之三 职场文化 -->
        <captions-one :captionsA="captionsE">
            <template>
                <p class="currentA" style="margin-bottom: 80px;">
                    {{ captionsB[2] }}
                </p>
            </template>
        </captions-one>
        <div class="four currentfour">
            <cations-three :captionsThree="item" v-for="(item, index) in captionsFour" :key='index'></cations-three>
        </div>

        <h5 class="student">学员模拟面试场景</h5>

        <!-- 四化之三图片展示 -->
        <captions-four></captions-four>

        <!-- 四化之四 军队文化 -->
        <captions-one :captionsA="captionsF">
            <template>
                <p class="currentA" style="margin-bottom: 80px;">
                    {{ captionsB[3] }}
                </p>
            </template>
        </captions-one>
        <jdwh-list></jdwh-list>

        <p class="division">进思素质教育培养目标：把孩子培养成“阳光，开朗，职业，有情怀，有责任”的美好青年，
            每个孩子从家乡来到进思，未来向四海八荒奔去，青春是他的风采，拼搏是他的气概，素质教育让青春的风采更加飞扬，让拼搏的气势更加恢宏。进思素质教育，矗立学生青云之志，培育仁德之心，铸就青年精彩人生。
        </p>

        <!-- 一育四化标题 -->
        <captions :captions="captions1"></captions>
        <!-- 新闻动态 -->
        <journalism :journalism="journalism"></journalism>

        <!-- 底部 -->
        <bottom></bottom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import captions from './captions.vue'
import captionsGraph from './captions-graph.vue'
import captionsOne from './captions-one.vue'
import caotionsTwo from './caotions-two.vue'
import cationsThree from './captions-three.vue'
import captionsFour from './captions-four.vue'
import jdwhList from './jdwhlist.vue'
import journalism from './journalism.vue'
import bottom from '../../components/footer/bootom.vue'

export default {
    name: 'quality',
    components: {
        cephalosome,
        captions,
        captionsGraph,
        captionsOne,
        caotionsTwo,
        cationsThree,
        captionsFour,
        jdwhList,
        journalism,
        bottom
    },
    data() {
        return {
            title: '进思学校模式有两大目标，三大特色。其中打造“落地式、可执行”的素质教育是进思三大特色之一，通过素质教育把学生培养成阳光，开朗，职业，有情怀，有责任的美好青年。',
            title1: [
                '进思学校 - 素质教育培养目标',
                '阳光，开朗，职业，有情怀，有责任的美好青年',
            ],
            conentA: '进思统一开发素质教育课程体系，分层级、分阶段，统一组织实施，素质教育课程内容可以用“一育四化”来概括。',

            // captions组件图片
            captions: require('../../assets/yyshtitle.png'),
            captions1: require('../../assets/xwdtname.png'),

            // 一育标题
            captionsA: {
                title: '一育 · 爱国主义教育',
                titleOne: '',
                titleTwo: '',
            },
            // 标题下方第一句话
            captionsB: [
                '进思用爱国主义教育的课程来培养学生具备良好的思想道德品质,拥有正确的世界观、人生观和价值观,成为有责任心、爱国情怀的中华儿女。',
                '进思用传统文化中的往圣绝学来教育和引导学生，培养他们树立知感恩行孝道的正确价值观念，永远心向阳光，做一个真诚善良的人；让他们能够修身养性，以德行天下，处理好纷繁复杂的人际关系，做合格的社会人。',
                '一个合格的职场人，必须具有良好的职业素养，而职业素养的打造进思通过职场文化来实现。在职场文化里，从主观和客观两个方面入手，让进思学子在学习的过程中同时打造自己良好的职业素养，成为一个合格的职场人。',
                '军人是力量，是执行力，是责任，是不怕吃苦受累等的代名词。进思素质教育课程体系中，军队文化贯穿始终，用军队的内务、卫生、队列和纪律，培养学生养成良好的生活习惯，良好的规矩意识，良好的执行能力和良好的行为习惯，具备军人一样的优秀品质，成为优秀的职场人。'
            ],
            // 四化之一标题
            captionsC: {
                title: '四化之一 · 传统文化',
                titleOne: '为什么用传统文化来培养和塑造学生价值观念和个性品格?',
                titleTwo: '生来是善良的，人是可以教的好的，学习传统文化可以传承文明，学习的过程中，可以学习处理<br>人际关系的方法，可以培养人的价值观念和个性品格。',
            },
            // 四化之二标题
            captionsD: {
                title: '四化之二 · 校园文化',
                titleOne: '学习校园文化，培养学生积极乐观向上的心态，成为合格校园人',
                titleTwo: '',
            },
            captionsThree: [
                {
                    title: "1",
                    core: '核心价值观-务实',
                    look: ['求真务实', '艰苦奋斗'],
                },
                {
                    title: "2",
                    core: '核心价值观-诚信',
                    look: ['诚实正直、言出必践', '言行坦荡、对事不对人'],
                },
                {
                    title: "3",
                    core: '核心价值观-感恩',
                    look: ['感恩客户、自己', '感恩团队、企业'],
                },
                {
                    title: "4",
                    core: '核心价值观-敬业',
                    look: ['专业执着', '精益求精'],
                },
            ],
            // 四化之三标题
            captionsE: {
                title: '四化之三 · 职场文化',
                titleOne: '学习职场文化，培养学生职场人的品质，成为合格职业人',
                titleTwo: '',
            },
            captionsFour: [
                {
                    title: "1",
                    core: '职业素养',
                    look: ['职业形象', '商务着装', '言谈举止'],
                },
                {
                    title: "2",
                    core: '职业素养',
                    look: ['高品质沟通', '思维表现力', '沟通中的问题'],
                },
                {
                    title: "3",
                    core: '职业素养',
                    look: ['赢在执行', '执行意识', '执行能力'],
                },
                {
                    title: "4",
                    core: '职业素养',
                    look: ['关系管理', '上下级关系', '同级关系', '客户关系'],
                },
            ],
            // 四化之四标题
            captionsF: {
                title: '文化之四 · 军队文化',
                titleOne: '严格学生管理，良好习惯，整齐有序，强身健体，积极向上',
                titleTwo: '',
            },
            // 一育动图
            caotionsTwo: [
                {
                    path: require('../../assets/agjy_icon1.png'),
                    title: '感恩祖国',
                    content1: '》国泰民安，没有战火纷飞，和平年代，安居乐业',
                    content2: '》因为国家的壮大：我们的未来/人生精彩无限',
                },
                {
                    path: require('../../assets/agjy_icon2.png'),
                    title: '璀璨五千年，源远流长',
                    content1: '》五千年文明史，激发民族自豪感和自信心',
                    content2: '》五千年璀璨文化，炎黄精神，源远流长',
                },
                {
                    path: require('../../assets/agjy_icon3.png'),
                    title: '今生无悔生为华夏儿郎',
                    content1: '》华夏古国，礼仪之邦',
                    content2: '》言谈举止，修身齐家 ',
                },
                {
                    path: require('../../assets/agjy_icon4.png'),
                    title: '为中华民族伟大复兴而努力奋斗',
                    content1: '》无数中华儿女为之奋斗，雄狮必将觉醒于世界东方  ',
                    content2: '》和平共赢，中华儿女维护祖国统一，爱我中华，光荣神圣',
                },
            ],
            // 百善孝为先图片文字
            filial: {
                path: require('../../assets/ctwhomg.png'),
                title: '百善孝为先',
                ancient: '孝悌之至，通于神明，光于四海，无所不通。',
                work: '——《孝经》',
                sumup: '人有孝心，是做人的本分，知感恩，行孝道是一个人基本的价值观念'
            },
            // 新闻动态
            journalism: [
                {
                    path: require('../../assets/210908120806820.jpg'),
                    title: '【喜报】就业季大满贯！进思教育，再创佳绩！',
                    timer: '2022-12-05',
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
                },
                {
                    path: require('../../assets/221129044922742.jpg'),
                    title: '选互联网专业，好工作“职”等你来!',
                    timer: '2022-12-05',
                    content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
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
.quality {
    background-color: #fff;

    .currentA {
        font-size: 18px;
        line-height: 42px;
        text-indent: 2em;
        margin-bottom: 40px;
    }

    .title {
        padding-top: 75px;

        p {
            font-size: 18px;
            line-height: 42px;
            text-indent: 2em;
            margin-bottom: 45px;
        }
    }

    .contentA {
        padding-top: 50px;
        font-size: 18px;
        line-height: 42px;
        text-indent: 2em;
    }

    // 四化之二state
    .captionsD>p {
        font-size: 18px;
        line-height: 42px;

        span {
            padding-left: 30px;
            font-weight: bold;
        }
    }

    .captionsD p:nth-of-type(2) {
        margin-bottom: 70px;
    }

    /deep/.four>div:nth-of-type(2) {
        .list {
            background-color: #e9f4e6;
        }
    }

    /deep/.four>div:nth-of-type(3) {
        .list {
            background-color: #e6f3fb;
        }
    }

    /deep/.four>div:nth-of-type(4) {
        .list {
            background-color: #fdf4ea;
        }
    }

    .four {
        display: flex;
        justify-content: space-between;
        width: 1200px;
        margin: 100px auto 0;
    }

    // 四化之二end

    // 四化之三state
    /deep/.currentfour h6 {
        font-size: 23px;
    }

    /deep/.currentfour p:nth-of-type(1) {
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
    }

    // 四化之三end
    .tuwen {
        height: 308px;
        padding-top: 85px;
        background: url(../../assets/yyshbg.png) 0 center no-repeat;

        span:first-child {
            margin-bottom: 30px;
        }

        span {
            display: block;
            padding-left: 95px;
            font-size: 30px;
            color: #000;
        }
    }

    .caotionsTwo {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .four-ctwh-1 {
        text-align: center;

        h5 {
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        span {
            display: block;
            text-align: center;
            margin-bottom: 20px;
            font-size: 18px;
        }
    }

    .student {
        font-size: 22px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 130px;
        margin-top: 90px;
        overflow: hidden;
    }

    .division {
        width: 95%;
        margin: 80px auto;
        max-width: 1200px;
        font-size: 18px;
        line-height: 42px;
        text-indent: 2em;
        margin-bottom: 0;
    }
}
</style>