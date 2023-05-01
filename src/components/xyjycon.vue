<template>
    <div class="xyjycon">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <div class="xyjycon_title" v-for="item in title" :key="item.id">
                        <h2>{{ item.titleh2 }}</h2>
                        <h3>{{ item.titleh3 }}</h3>
                        <div class="line"></div>
                        <p v-for="items in item.titlep">{{ items }}</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: ['title'],
    // title: [
    //             {
    //                 id: '1',
    //                 titleh2: '进思学员就业',
    //                 titleh3: '致力于培养被企业争抢的复合型IT人才',
    //                 titlep: ['4大学院，8大专业，培养学员具备就业再就业终身就业的能力']
    //             }
    //         ],
    name: 'xyjycon',

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
.xyjycon {
    .xyjycon_title {
        text-align: center;
        margin: 60px 0;

        h2 {
            height: 80px;
            line-height: 80px;
            margin-bottom: 25px;
            font-size: 40px;
            font-weight: bold;
        }

        h3 {
            font-size: 30px;
            margin-bottom: 25px;
        }

        .line {
            width: 80px;
            height: 4px;
            border-radius: 4px;
            background: #000000;
            margin: 0 auto 20px;
        }

        p {
            font-size: 22px;
            color: #333;
            line-height: 35px;
        }
    }
}
</style>