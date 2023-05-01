<template>
    <div class="star">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="star_container">
                        <div class="star_content">
                            <h1>就业明星</h1>
                            <div class="picScroll-left">
                                <el-row>
                                    <el-col :span="22" :offset="1">
                                        <div class="grid-content bg-purple-dark">
                                            <!-- swiper -->
                                            <div class="swiper-container">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide"></div>
                                                    <div class="swiper-slide">Slide 2</div>
                                                    <div class="swiper-slide">Slide 3</div>
                                                    <div class="swiper-slide">Slide 3</div>
                                                    <div class="swiper-slide">Slide 3</div>
                                                </div>
                                                <!-- 如果需要分页器 -->
                                                <div class="swiper-pagination"></div>

                                                <!-- 如果需要导航按钮 -->
                                                <div class="swiper-button-prev"></div>
                                                <div class="swiper-button-next"></div>

                                                <!-- 如果需要滚动条 -->
                                                <div class="swiper-scrollbar"></div>
                                            </div>
                                        </div>
                                    </el-col>
                                </el-row>

                            </div>
                        </div>
                    </div>

                    <el-row>
                        <el-col :span="20" :offset="2">
                            <div class="grid-content bg-purple-dark">
                                <div class="referral">
                                    就业服务是进思学校打造良好社会口碑的立校基础：在课程体系开发时，就以全面了解社会、行业及企业的发展趋势和动态，以回报企业需要、达到企业要求为目标；在教学过程中，以积累工作经验、达到角色转变、经受使用挫折、提升职场竞争能力等作为质量要求；在就业过程中，以扩大就业渠道、获得实训机会、获得市场信息，实现为学员提供个性化的就业服务。
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {
    name: 'star',

    data() {
        return {

        };
    },

    mounted() {
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 20,
            //mousewheel: true, //滚轮
            loop: true, // 循环模式选项

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.star {

    .star_container {
        width: 100%;
        height: 743px;
        margin-bottom: 70px;
        background: url(@/assets/jymxbg.png) center no-repeat;

        h1 {
            font-size: 60px;
            font-weight: bold;
            color: #fff;
            text-align: center;
            margin: 55px auto 80px;
            overflow: hidden;
        }

        .picScroll-left {
            height: 420px;
            background-color: pink;

            .swiper-slide {
                width: 280px;
                height: 420px;
                background-color: red;
            }
        }
    }

    .referral {
        font-size: 18px;
        line-height: 48px;
        text-indent: 2em;
        margin-bottom: 50px;
    }
}
</style>