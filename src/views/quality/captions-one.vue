<template>
    <div class="captions-one">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="captions_title">{{ captionsA.title }}</div>
                    <div class="captions_content">
                        <slot></slot>
                    </div>
                    <div class="captions_contents">
                        <h5>{{ captionsA.titleOne }}</h5>
                    </div>
                    <div class="captions_content2">
                        <p v-html="captionsA.titleTwo"></p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'captions-one',
    props: ['captionsA'],
    // 一育四化标题
    //  captionsA: {
    //             title: '一育 · 爱国主义教育',  //背景图标题
    //             titleOne: '',                 //加粗小标题 
    //             titleTwo: '',                 //小标题下方文字
    //         }
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
.captions-one {
    .captions_title {
        line-height: 70px;
        text-align: center;
        margin: 60px auto 70px;
        background: url(../../assets/xiangyun.png) center 0 no-repeat;
        font-size: 48px;
        font-weight: bold;
    }

    .captions_content {
        max-width: 1200px;
        margin: 0 auto;
    }

    .captions_contents {
        h5 {
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }
    }

    .captions_content2 {
        font-size: 18px;
        line-height: 42px;
        text-indent: 2em;
        margin-bottom: 40px;
        text-align: center;
    }
}
</style>