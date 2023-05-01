<template>
    <div class="schoolPicture">
        <ul class="clearfix">
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
                require('@/assets/xxgk_xywhimg1.png'),
                require('@/assets/xxgk_xywhimg2.png'),
                require('@/assets/xxgk_xywhimg3.png'),
                require('@/assets/xxgk_xywhimg4.png'),
                require('@/assets/xxgk_xywhimg5.png'),
                require('@/assets/xxgk_xywhimg6.png'),
                require('@/assets/xxgk_xywhimg7.png'),
                require('@/assets/xxgk_xywhimg8.png'),
                require('@/assets/xxgk_xywhimg9.png'),
                require('@/assets/xxgk_xywhimg10.png'),
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
    ul {
        width: 1200px;
        height: 990px;
        margin: 0 auto;
        position: relative;

        li {
            position: absolute;
            left: 0;
            top: 0;
            width: 280px;
            height: 260px;
            overflow: hidden;

            img:hover {
                transform: scale(1.15);
            }

            img {
                transition: all .5s linear;
            }
        }

        li:nth-of-type(2) {
            left: 300px;
            top: 20px;
            width: 600px;
        }

        li:nth-of-type(3) {
            left: auto;
            right: 0;
            width: 280px;
            height: 378px;
        }

        li:nth-of-type(4) {
            left: 0px;
            top: 280px;
            width: 280px;
            height: 400px;
        }

        li:nth-of-type(5) {
            left: 300px;
            top: 304px;
            width: 290px;
            height: 374px;
        }

        li:nth-of-type(6) {
            left: 610px;
            top: 304px;
            width: 290px;
            height: 374px;
        }

        li:nth-child(7) {
            left: auto;
            right: 0;
            top: 394px;
            width: 280px;
            height: 284px;
        }

        li:nth-child(8) {
            left: 0;
            right: auto;
            top: 700px;
            width: 590px;
            height: 290px;
        }

        li:nth-child(9) {
            left: 610px;
            right: auto;
            top: 700px;
            width: 290px;
            height: 290px;
        }

        li:nth-child(10) {
            left: auto;
            right: 0;
            top: 700px;
            width: 290px;
            height: 290px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>