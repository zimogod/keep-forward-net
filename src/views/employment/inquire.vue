<template>
    <div class="inquire">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <ul>
                        <li v-for="(item, index) in list" :key="index">
                            <div class="img">
                                <img :src="item.path" alt="">
                                <div class="white">{{ item.head }}</div>
                            </div>
                            <p>{{ item.title }}</p>
                        </li>
                    </ul>
                    <el-button type="text" @click="open" class="refer">点击咨询</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'inquire',

    data() {
        return {
            list: [
                {
                    path: require('../../assets/redbg.png'),
                    head: '01',
                    title: '零基础能学会吗？'
                },
                {
                    path: require('../../assets/bluebg.png'),
                    head: '02',
                    title: '学什么技术好？'
                },
                {
                    path: require('../../assets/redbg.png'),
                    head: ' 03',
                    title: '学费是多少？'
                },
                {
                    path: require('../../assets/bluebg.png'),
                    head: '04',
                    title: '就业有保障吗？'
                },
                {
                    path: require('../../assets/redbg.png'),
                    head: '05',
                    title: '还有其他问题吗？'
                },
            ]
        };
    },

    mounted() {

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
.inquire {
    background: #f3f3f3;
    padding: 110px 0 70px;

    ul {
        display: flex;
        justify-content: center;
        margin-bottom: 75px;

        li:nth-of-type(2n+2) .img .white {
            color: black;
        }

        li {
            flex-grow: 1;
            text-align: center;

            .img {
                display: flex;
                position: relative;
                justify-content: center;
                transition: all .3s linear;

                .white {
                    font-size: 36px;
                    color: #000;
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: 36px;
                    transform: translate(-50%, -50%);
                    color: #fff;
                }

                img {
                    width: 151px;
                    height: 151px;
                }



            }

            p {
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                margin-top: 5px;
            }
        }

        li:hover>.img {
            transform: translateY(-5px);
        }

    }

    .refer {
        width: 300px;
        height: 60px;
        display: block;
        margin: 0 auto;
        border-radius: 60px;
        text-align: center;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        background: #409EFF;
        transition: all .3s linear;
    }

    .refer:hover {
        box-shadow: 0 0 20px #53a3f3;
    }
}
</style>