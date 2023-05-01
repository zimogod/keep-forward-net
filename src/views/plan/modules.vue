<template>
    <div class="modules">
        <el-row>
            <el-col :span="10" :offset="1">
                <div class="grid-content bg-purple">
                    <ul>
                        <li v-for="item in modulesLeft" :key="item.id">
                            <div class="img">
                                <img :src="item.path" alt="">
                                <p>{{ item.title }}</p>
                            </div>
                            <div class="info">
                                <div class="info_a">
                                    <span>{{ item.peson }}</span>
                                    <span>{{ item.target }}</span>
                                </div>
                                <el-button type="text" @click="open" class="djzx">点击咨询</el-button>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="10" :offset="2">
                <div class="grid-content bg-purple-light">
                    <ul>
                        <li v-for="item in modulesRight" :key="item.id">
                            <div class="img">
                                <img :src="item.path" alt="">
                                <p>{{ item.title }}</p>
                            </div>
                            <div class="info">
                                <div class="info_a">
                                    <span>{{ item.peson }}</span>
                                    <span>{{ item.target }}</span>
                                </div>
                                <el-button type="text" @click="open" class="djzx">点击咨询</el-button>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'modules',
    props: ['titleA'],
    data() {
        return {
            // 左列的招生计划
            modulesLeft: [],
            // 右列的招生计划
            modulesRight: [],
        };
    },

    mounted() {
        // 左列招生计划
        this.modulesLeft = this.titleA.filter(function (item, index) {
            return index % 2 == 0
        })
        // 右列的招生计划
        this.modulesRight = this.titleA.filter(function (item, index) {
            return index % 2 != 0
        })
        console.log(this.modulesRight);
    },

    methods: {
        open() {
            this.$alert('13133269388', '李彩仙老师', {
                confirmButtonText: '确定',
            });
        }
    },
};
</script>

<style lang="less" scoped>
.modules {
    ul {
        li {
            margin-bottom: 40px;

            .img {
                position: relative;
                width: 100%;

                img {
                    width: 100%;
                }

                p {
                    background: rgba(0, 0, 0, .8);
                    height: 60px;
                    line-height: 60px;
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    font-size: 20px;
                    color: #fff;
                }
            }

            .info {
                padding: 70px 30px 50px;
                background: #f6f6f6;
                border: 1px solid #e3e3e3;
                border-top-width: 0;
                position: relative;

                .info_a {
                    height: 147px;

                    span {
                        display: block;
                        width: 100%;
                        font-size: 18px;
                        line-height: 44px;
                    }

                    span:nth-of-type(1) {
                        margin-bottom: 15px;
                    }
                }

                .djzx {
                    width: 220px;
                    height: 50px;
                    display: block;
                    margin: 0 auto;
                    border-radius: 60px;
                    text-align: center;
                    color: #fff;
                    font-size: 24px;
                    font-weight: bold;
                    background: #409EFF;
                    transition: all .3s linear;
                    margin-top: 50px;
                }

                .djzx:hover {
                    box-shadow: 0 0 20px #48a0f8;
                    background: #48a0f8;
                    color: #fff;
                }

            }
        }
    }
}
</style>