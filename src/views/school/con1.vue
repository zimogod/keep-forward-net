<template>
    <div class="con1">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <ul class="list-11">
                        <li class="lis-1" v-for="(item, index) in current" :key="index">
                            <div class="inner">
                                <img class="chils" :src="item.path" alt="">
                            </div>
                            <p>{{ item.title }}</p>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'con1',

    data() {
        return {
            current: [
                {
                    path: require('../../assets/siximg1.png'),
                    title: '高级全栈人才',
                },
                {
                    path: require('../../assets/siximg2.png'),
                    title: '高效学习',
                },
                {
                    path: require('../../assets/siximg3.png'),
                    title: '感悟式素质教育',
                },
                {
                    path: require('../../assets/siximg4.png'),
                    title: '就业选择',
                },
                {
                    path: require('../../assets/siximg5.png'),
                    title: '人人皆可成才',
                },
                {
                    path: require('../../assets/siximg6.png'),
                    title: '终身就业服务',
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
.con1 {
    margin-bottom: 80px;

    .list-11 {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .lis-1:hover {
            transform: translateY(-10px);
        }

        .lis-1 {
            transition: all .7s linear;
            cursor: pointer;
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;

            .inner {
                margin-bottom: 25px;
            }

            p {
                font-size: 26px;
                font-weight: bold;
                text-align: center;
                color: #000;
            }
        }
    }
}
</style>