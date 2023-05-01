<template>
    <div class="captions">
        <el-row>
            <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple-dark">
                    <div class="name">
                        <img :src="captions" alt="">
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'captions',
    props: ['captions'],
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
.captions {
    margin: 75px 0 90px 0;

    .name {
        text-align: center;
    }
}
</style>