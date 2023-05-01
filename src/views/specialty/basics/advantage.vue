<template>
    <div class="advantage">
        <div class="name">特色优势</div>
        <ul class="tsyslist">
            <li v-for="(item, index) in list" :key="index">
                <div class="yuan">{{ item.num }}</div>
                <div class="info">
                    <h2>{{ item.title }}</h2>
                    <p v-for="(items, index) in item.content" :key="index">{{ items }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'advantage',

    data() {
        return {
            list: [
                {
                    title: '传统基础教育',
                    num: '1',
                    content: [
                        '1.分分是学生的命根',
                        '2.考考是老师的法宝',
                        '3.学生天天作业作业',
                        '4.老师一直“怒吼怒吼"',
                        '5.结果学生与学校渐行渐远',
                        '6.结果学生不是学生，老师 还是老师'
                    ]
                },
                {
                    title: '进思基础学院',
                    num: '2',
                    content: [
                        '1.时间是学生最珍惜的',
                        '2.观念是做有素养的青少年',
                        '3.习惯是作息规律自我管理',
                        '4.行为是知礼守矩感恩进取"',
                    ]
                },
                {
                    title: '进思基础学院',
                    num: '3',
                    content: [
                        '5.学习是文化素养和技能',
                        '6.考试是实操锻炼加面试',
                        '7.老师是指导辅导开小灶',
                        '8.师生互尊重，共平等同 成长',
                    ]
                },
                {
                    title: '基础学院关键词',
                    num: '4',
                    content: ['素质、文化素养、礼仪、 规矩、好习惯、善表达、 感恩、进取、务实、诚信、 敬业、善于思考、易学、 好玩、有成就']
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
.advantage {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

    .name {
        width: 404px;
        margin-bottom: 150px;
        height: 93px;
        line-height: 93px;
        font-size: 36px;
        font-weight: bold;
        margin: 0 auto 70px;
        background: url(../../../assets/xsfmtitle.png) 0 0 no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin-top: 100px;
    }

    .tsyslist {
        width: 100%;
        margin-bottom: 85px;
        display: flex;
        justify-content: space-between;

        li:nth-of-type(2) {
            .yuan {
                background: url(../../../assets/tsysyuan2.png) 0 0 no-repeat;
            }

            .info {
                background: url(../../../assets/tsyskuang2.png) 0 0 no-repeat;
            }
        }

        li:nth-of-type(3) {
            .yuan {
                background: url(../../../assets/tsysyuan3.png) 0 0 no-repeat;
            }

            .info {
                background: url(../../../assets/tsyskuang3.png) 0 0 no-repeat;
            }
        }

        li:nth-of-type(4) {
            .yuan {
                background: url(../../../assets/tsysyuan4.png) 0 0 no-repeat;
            }

            .info {
                background: url(../../../assets/tsyskuang4.png) 0 0 no-repeat;
            }
        }

        li {
            .yuan {
                width: 132px;
                height: 132px;
                font-size: 50px;
                text-align: center;
                line-height: 132px;
                margin: 0 auto 30px;
                background: url(../../../assets/tsysyuan1.png) 0 0 no-repeat;
                background-size: 100% 100%;
            }

            .info {
                width: 276px;
                height: 406px;
                padding: 0 25px;
                background: url(../../../assets/tsyskuang1.png) 0 0 no-repeat;
                background-size: 100% 100%;
                overflow: hidden;

                h2 {
                    height: 88px;
                    line-height: 88px;
                    font-size: 26px;
                    font-weight: bold;
                    text-align: center;
                    margin-top: 20px;
                    margin-bottom: 15px;
                    overflow: hidden;
                }

                p {
                    font-size: 18px;
                    line-height: 36px;
                }
            }
        }
    }
}
</style>