<template>
    <div class="idea">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="idea_title">
                        <h2>办学理念</h2>
                    </div>
                    <ul class="clearfix">
                        <li>
                            <a href="#">
                                <span>
                                    紧跟时代<br>发展趋势
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="current">
                                    回归教育<br>行业规律
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    坚持职业<br>教育事业
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="current">
                                    培养高级应用<br>型专业技术人才
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'idea',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.idea {
    height: 520px;
    background: url(@/assets/xxgk_bxlnbg.png) center 0 no-repeat;
    margin-top: 60px;

    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }

    .idea_title {
        width: 100%;
        color: #000000;
        margin: 40px auto;
        text-align: center;
        overflow: hidden;

        h2 {
            font-size: 60px;
            font-weight: bold;
            color: #fff;
        }
    }

    ul {

        li {
            width: 25%;
            float: left;

            a {
                width: 219px;
                height: 238px;
                display: block;
                margin: 0 auto;
                overflow: hidden;
                background: url(@/assets/bxlnsmallbg.png) 0 0 no-repeat;
                background-size: cover;

                span {
                    font-size: 24px;
                    line-height: 36px;
                    font-weight: bold;
                    color: #000;
                    text-align: center;
                    display: block;
                    margin-top: 70px;
                }

                .current {
                    color: red;
                }
            }
        }
    }
}
</style>