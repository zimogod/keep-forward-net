<template>
    <div class="scroll_x">
        <!-- 专业薪资table栏 -->
        <el-row>
            <el-col class="box1">
                <div class="grid-content bg-purple-dark">
                    <div class="scroll_x_content">
                        <a href="javascript:;" v-for="(item, index) in list" :key="index"
                            :class="currentIndex === index ? 'on' : ''" @click="handel(index)">
                            {{ item }}
                        </a>
                    </div>
                </div>
            </el-col>
        </el-row>
        <!-- 专业薪资展示 -->
        <el-row>
            <el-col class="box">
                <div class="head">
                    <div class="headinnee">
                        <span v-for="(item, index) in title" :key="index">{{ item }}</span>
                    </div>
                </div>
                <div class="body">
                    <div class="row" v-for="(item, index) in content" :key="index">
                        <span class="w1">{{ item.grade }}</span>
                        <span class="w2">{{ item.name | filtrate }}</span>
                        <span class="w3">{{ item.pay }}</span>
                        <span class="w4">{{ item.census }}</span>
                        <span class="w5">{{ item.company }}</span>
                        <span class="w6">{{ item.titmer }}</span>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'scroll_x',

    data() {
        return {
            currentIndex: 0,
            list: ['H5工程师', 'WEB架构', 'WEB全栈', '物联网工程师', '全链路工程师', 'python工程师'],
            title: ['学院', '姓名', '薪资（元）/月', '户籍', '就业公司', '就业时间'],
            content: [
                {
                    grade: '物联网',
                    name: '李*华',
                    pay: '15000',
                    census: '山西运城',
                    company: '北京**网络有限公司',
                    titmer: '2021年02月'
                },
                {
                    grade: '物联网',
                    name: '张*锋',
                    pay: '13000',
                    census: '山西临汾',
                    company: '北京东**泰科技有限公司',
                    titmer: '2022年05月'
                },
                {
                    grade: '智能学院',
                    name: '李*星',
                    pay: '13500',
                    census: '信阳',
                    company: '北京**科技有限公司',
                    titmer: '2021年04月'
                },
                {
                    grade: '物联网',
                    name: '赵*升',
                    pay: '16000',
                    census: '山东菏泽',
                    company: '北京**股份有限公司',
                    titmer: '2022年11月'
                },

                {
                    grade: '智能学院',
                    name: '定*',
                    pay: '12000',
                    census: '河南三门峡',
                    company: '郑州**科技有限公司',
                    titmer: '2022年9月'
                },
                {
                    grade: '物联网',
                    name: '黑*晨',
                    pay: '18000',
                    census: '宁夏银川',
                    company: '华为**有限公司',
                    titmer: '2022年11月'
                },
                {
                    grade: '物联网',
                    name: '席*豪',
                    pay: '12000',
                    census: '安徽阜阳',
                    company: '科大讯飞**有限公司',
                    titmer: '2023年4月'
                }
            ]
        };
    },

    mounted() {

    },
    computed: {
    },
    methods: {
        handel(index) {
            this.currentIndex = index
        }
    },
    filters: {
        // 过滤姓名，替换为 * 
        filtrate: function (val) {
            let a = val.charAt(1);
            if (val.length == 2 || val.length > 2) {
                return val.replace(a, '*')
            }
        },
        // 过滤公司名 替换 *
        firm: function (val) {
            let a = val.charAt(3);
            if (val.length > 8) {
                return val.replace(a, '*')
            }
        }
    }
};
</script>

<style lang="less" scoped>
.scroll_x {
    margin-bottom: 100px;


    .scroll_x_content {
        max-width: 1200px;
        height: 100px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;

        .on {
            background-image: linear-gradient(to bottom, #409EFF, #310000);
        }

        a:hover {
            background-image: linear-gradient(to bottom, #409EFF, #310000);
        }

        a {
            display: inline-block;
            width: 135px;
            height: 50px;
            margin-bottom: 100px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            font-size: 18px;
            transition: all .3s linear;
            border-radius: 50px;
            background-color: pink;
            background-image: linear-gradient(to right, #0190e1, #005dac);
        }
    }

    .box {
        display: flex;
        flex-direction: column;
        align-items: center;

        .head {
            max-width: 1200px;

            .headinnee {
                background: #409EFF;
                cursor: pointer;

                span {
                    display: inline-block;
                    width: 200px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    color: #fff;
                    background: #409EFF;
                    font-weight: 600;
                    position: relative;
                    font-size: 16px;
                }

                span:nth-of-type(3) {
                    width: 150px;
                }

                span:nth-of-type(3)::before {
                    content: '';
                    width: 100%;
                    height: 30px;
                    background: #409EFF;
                    position: absolute;
                    top: -29px;
                    left: 0;
                    border-radius: 5px 5px 0 0;
                }

                // span:nth-of-type(3)::after {
                //     content: '';
                //     width: 100%;
                //     height: 30px;
                //     background: #409EFF;
                //     position: absolute;
                //     bottom: -530px;
                //     left: 0;
                //     border-radius: 0 0 5px 5px;
                // }
            }
        }

        .body {
            max-width: 1200px;

            .row:nth-of-type(2n+1) {
                background: #f7f7f7;
            }

            .row:nth-of-type(2n) {
                background: #eeeeee;
            }

            .row {
                span {
                    display: inline-block;
                    text-align: center;
                    width: 200px;
                    height: 50px;
                    line-height: 50px;
                    font-size: 16px;
                }

                span:nth-of-type(3) {
                    width: 150px;
                    color: #fff;
                    background: #409EFF;
                    font-weight: bold;
                }
            }
        }
    }

}
</style>