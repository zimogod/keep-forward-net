<template>
    <div class="schoolPicture">
        <ul class="list clearfix">
            <li v-for="(item, index) in imgs" :key=index>
                <a href="#">
                    <img :src="item" alt="">
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'schoolPicture',

    data() {
        return {
            imgs: [
                require('@/assets/xiao/ban1.jpg'),
                require('@/assets/xiao/ban2.jpg'),
                require('@/assets/xiao/ban3.jpg'),
                require('@/assets/xiao/ban4.jpg'),
                require('@/assets/xiao/ban5.jpg'),
                require('@/assets/xiao/ban6.jpg'),
                require('@/assets/xiao/ban7.jpg'),
                require('@/assets/xiao/ban8.jpg'),
                // require('@/assets/xiao/ban9.jpg'),
                // require('@/assets/xiao/ban10.jpg'),
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
.schoolPicture {
    .list {
        width: 1300px;
        height: 700px;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;

        li {
            width: 300px;
            height: 260px;
            overflow: hidden;

            img:hover {
                transform: scale(1.15);
            }

            img {
                transition: all .5s linear;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>