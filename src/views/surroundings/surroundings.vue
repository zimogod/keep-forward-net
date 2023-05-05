<template>
    <div class="surroundings">
        <!-- 头部 -->
        <cephalosome></cephalosome>
        <!-- 就业 title -->
        <xyjycon :title="title"></xyjycon>
        <!-- 图片脚 -->
        <el-row type="flex" class="row-bg" justify="space-around" v-for="(item, index) in current" :key="index">
            <el-col :span="5">
                <div class="grid-content bg-purple">
                    <a href="#">
                        <div class="img">
                            <img :src="item.path" alt="">
                            <p>{{ item.name }}</p>
                        </div>
                    </a>
                </div>
            </el-col>
            <el-col :span="5" v-for="(items, index) in item.children" :key="index">
                <div class="grid-content bg-purple-light">
                    <a href="#">
                        <div class="img">
                            <img :src="items.path" alt="">
                            <p>{{ item.name }}</p>
                        </div>
                    </a>
                </div>
            </el-col>
        </el-row>

        <!-- 底部 -->
        <bootom></bootom>
    </div>
</template>

<script>
import cephalosome from '../../components/header/cephalosome.vue'
import xyjycon from '../../components/xyjycon.vue'
import bootom from '../../components/footer/bootom.vue'

export default {
    name: 'surroundings',
    components: {
        xyjycon,
        bootom,
        cephalosome
    },
    data() {
        return {
            title: [
                {
                    id: '1',
                    titleh2: '校园环境',
                    titleh3: '独立校园、完善的教学设施、安全、干净的住宿环境',
                    titlep: ['打造高品质就业']
                }
            ],
            current: [
                {
                    path: require('@/assets/xiao/nice1.jpg'),
                    name: '校园美景',
                    children: [
                        {
                            path: require('@/assets/xiao/nice2.jpg'),
                        },
                        {
                            path: require('@/assets/xiao/nice3.jpg'),
                        },
                        {
                            path: require('@/assets/xiao/nice4.jpg'),
                        }
                    ]
                },
                {
                    path: require('@/assets/xiao/nice5.jpg'),
                    name: '校园美景',
                    children: [
                        {
                            path: require('@/assets/xiao/nice6.jpg'),
                        },
                        {
                            path: require('@/assets/xiao/nice8.jpg'),
                        },
                        {
                            path: require('@/assets/xiao/nice9.jpg'),
                        }
                    ]
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
.surroundings {
    background-color: #fff;

    .row-bg {
        margin-bottom: 70px;
    }

    a:hover {
        box-shadow: 10px 10px 15px #ccc;
    }

    a {
        display: block;
        margin-bottom: 10px;
        transition: all .2s linear;

        .img {
            text-align: center;

            img {
                width: 380px;
                height: 220px;
            }

            p {
                width: 100%;
                height: 50px px;
                font-size: 18px;
                color: #000;
                line-height: 50px;
                text-align: center;
            }
        }
    }

}
</style>