<template>
    <el-row class="inner">
        <el-col class="clearfix">
            <div class="li" v-for="(item, index) in list" :key="index">
                <div class="inner1">
                    <div class="img">
                        <img :src="item.path" alt="">
                    </div>
                    <p>{{ item.title }}</p>
                    <span>{{ item.content }}</span>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'inner',

    data() {
        return {
            list: [
                {
                    path: require('../../assets/siximg1.png'),
                    title: '高级全栈人才',
                    content: '打造拥有多项IT技术的高端人才，在市场上具备很强的竞争力不易被替代。'
                },
                {
                    path: require('../../assets/siximg2.png'),
                    title: '高效学习',
                    content: '激励教学，兴趣教学，独特的教学大纲使学员学习更容易，在学习过程中建立自驱力，实现自我成就，高效学习。'
                },
                {
                    path: require('../../assets/siximg3.png'),
                    title: '感悟式素质教育',
                    content: '通过素养主题为课程，形成活动，让学生形成感悟和思考，培养学生成为阳光，开朗，职业，有情怀有责任的人。'
                },
                {
                    path: require('../../assets/siximg4.png'),
                    title: '就业选择',
                    content: '先平台后薪资，注重入职平台，注重个人能力提升，找到适合自己发展的平台。'
                },
                {
                    path: require('../../assets/siximg5.png'),
                    title: '人人皆可成才',
                    content: '独特的教育模式，资深的双师型教师，严格的质量控制保证每一个学员高质量就业。'
                },
                {
                    path: require('../../assets/siximg6.png'),
                    title: '终身就业服务',
                    content: '培养学员具备就业能力，再就业能力，持续就业能力。让每个学生都能在职场中稳定发展、提升。'
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
.inner {
    width: 100%;
    display: flex;
    justify-content: center;

    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }

    .clearfix {
        background: url('../../assets/jyjxline.png') center center no-repeat;
        width: 1240px;
        text-align: center;

        .li:nth-of-type(3n) {
            margin-right: 0;
        }

        .li:nth-of-type(2) {
            width: 200px;
        }

        .li:nth-of-type(4) {
            margin-left: 212px;
        }

        .li:nth-of-type(1),
        .li:nth-of-type(2),
        .li:nth-of-type(3) {
            margin-bottom: 240px;
        }

        .li {
            float: left;
            width: 180px;
            cursor: pointer;
            margin-right: 240px;

            .inner1 {
                width: 100%;
                height: 100%;
                transition: all .7s linear;

                .img {
                    text-align: center;
                    margin-bottom: 25px;
                }

                p {
                    font-size: 20px;
                    margin-bottom: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: #000;
                }

                span {
                    display: block;
                    height: 150px;
                    line-height: 30px;
                    font-size: 16px;
                    text-align: justify;
                    color: #181818;
                    text-align: center;
                }
            }

            .inner1:hover {
                transform: translateY(-10px);
            }
        }
    }
}
</style>