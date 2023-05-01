<template>
    <div class="biaoti">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    {{ title[0] }}
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'biaoti',
    props: ['title'],
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
.biaoti {
    width: 641px;
    height: 90px;
    background: url(@/assets/jyfwbtbg.png) 0 0 no-repeat;
    background-size: cover;
    font-size: 40px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    padding-top: 6px;
    margin: 0 auto;
    margin-bottom: 100px;
}
</style>