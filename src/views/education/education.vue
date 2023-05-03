<template>
    <div class="education">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- <div class="title">
            <div class="grid-content bg-purple-dark">
                <p>进思以“实现每一个孩子的职业梦想”为使命，顺应社会发展趋势，遵循教育行业规律，深耕职业教育事业，培育德才兼备人才，打造国内首个 “终身学习平台”。</p>
            </div>
        </div> -->
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 教育教学图片展示 -->
        <inner></inner>
        <!-- 教学资料 -->
        <div class="means">
            <div class="left"></div>
            <div class="right">
                <h5>教学资料</h5>
                <p>每年全面更新教学大纲、资料，快速对接市场前沿技能</p>
            </div>
            <eEcharts></eEcharts>
        </div>
        <div class="meansa ">
            <div class="lef">
                <mEcharts></mEcharts>
            </div>
            <div class="center">

            </div>
            <div class="rig">
                <img src="@/assets/jyffrig.png">
            </div>
        </div>

        <div class="means">
            <div class="left"></div>
            <div class="right">
                <h5>质量控制</h5>
            </div>
            <qEcharts></qEcharts>
        </div>
        <!-- 学生管理 -->
        <!-- <xsglcon></xsglcon> -->
        <!-- 底部 -->
        <bottom></bottom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from "../../components/xyjycon.vue"
import inner from './inner.vue'
import xsglcon from './xsglcon.vue'
import bottom from '../../components/footer/bootom.vue'
import eEcharts from './echarts/educationEcharts.vue'
import mEcharts from './echarts/meansEcharts.vue'
import qEcharts from './echarts/qualityEcharts.vue'

export default {
    name: 'education',
    components: {
        cephalosome,
        xyjycon,
        inner,
        xsglcon,
        bottom,
        eEcharts,
        mEcharts,
        qEcharts
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '教育教学',
                    titleh3: '注重学员实战能力 激发学员自我探究能力 每个孩子都能高薪就业',
                    titlep: ['培养高级应用型专业技术人才']
                }
            ],
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.education {
    background-color: #fff;
    width: 100%;

    .title {
        padding-top: 80px;
        display: flex;
        justify-content: center;

        p {
            width: 1268px;
            font-size: 18px;
            line-height: 42px;
            text-indent: 2em;
        }
    }

    .means {
        height: 650px;
        width: 90%;
        background: url(@/assets/jyjxbgcom.png) 0 center no-repeat;
        margin-top: 100px;
        background-size: 114% 284px;
        display: flex;
        justify-content: center;

        .left {
            width: 400px;
        }

        .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 400px;

            h5 {
                font-weight: bold;
                font-size: 48px;
            }

            p {
                font-size: 28px;
            }
        }
    }

    .meansa {
        background: url(@/assets/jyjxbgcom.png) 530px center no-repeat;
        background-size: 102% 284px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 650px;

        .center {
            width: 100px;
        }

        .rig {
            margin-left: 20px;

            img {
                width: 500px;
                height: 99px;
            }
        }
    }
}
</style>