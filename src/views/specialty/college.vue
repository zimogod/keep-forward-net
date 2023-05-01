<template>
    <div class="college">
        <div class="specialty_container">

            <div class="box">
                <div class="img">
                    <img :src="college.path" alt="">
                </div>
                <div class="info">
                    <h4>
                        <span>{{ title1 }}</span>
                        <strong>{{ title2 }}</strong>
                    </h4>
                    <ul class="item">
                        <li v-for="(item, index) in college.intro" :key="index">
                            <span>{{ item.title }}</span>
                            {{ item.content }}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'college',
    props: ['college'],
    // list: [
    //             {
    //                 path: require('../../assets/zyjsimg1.png'),
    //                 coollege: '基础学院',
    //                 intro: [
    //                     {
    //                         title: '学院定位：',
    //                         content: '训练思维、培养素质、教授计算机应用知识，为学生进入专业学院，打好基础'
    //                     },
    //                     {
    //                         title: '学院简介：',
    //                         content: '通过五个文化及思维训练，培养学生守规矩、知感恩、善思考的优良品质，通过计算机应用技术的学习，使学生成为具备计算机实际应用能力的人。让学生，阳光，开朗，充满自信。'
    //                     },
    //                     {
    //                         title: '主要课程：',
    //                         content: 'PS实战、AI攻略、AE指南、Premier&Flash、最美设计师、计算机基础、网络安全与管理、计算机故障处理、硬件大咖、道德与法律、中华五千年、最美中国、口才演讲、实用英语、Word世界、浅析HTML、多彩PowerPoint、多彩网页制作等。'
    //                     },
    //                 ]
    //             },
    //         ]
    components: {

    },
    data() {
        return {
            title1: '',
            title2: ' '
        };
    },

    mounted() {
        let index = this.college.coollege.indexOf('学')
        this.title1 = this.college.coollege.slice(0, index)
        this.title2 = this.college.coollege.slice(index)
    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.college {
    margin-bottom: 70px;

    .specialty_container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;

        .box {
            width: 100%;
            height: 435px;
            position: relative;
            z-index: 1;

            .img::after {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border: 1px solid #94bde5;
                z-index: -1;
                left: 40px;
                top: 40px;
            }

            .img {
                position: relative;
                width: 42%;
                height: 81%;
            }

            .info {
                width: 60.84%;
                position: absolute;
                right: 0;
                bottom: 0;
                padding: 30px 35px;
                background: #fff;
                box-shadow: 0 0 10px #e7e7e7;
                z-index: 3;

                h4::before {
                    content: '';
                    position: absolute;
                    width: 68px;
                    height: 2px;
                    background: #000;
                    left: 0;
                    bottom: 0;
                }

                h4 {
                    font-size: 30px;
                    font-weight: bold;
                    color: #000;
                    padding-bottom: 17px;
                    margin-bottom: 10px;
                    position: relative;

                    span {
                        font-weight: bold;
                        color: #ec1c32;
                    }

                    strong {
                        font-weight: bold;
                    }
                }

                .item {
                    li {
                        font-size: 16px;
                        color: #222;
                        margin-bottom: 20px;
                        line-height: 25px;

                        span {
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }

}
</style>