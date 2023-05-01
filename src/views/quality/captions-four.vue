<template>
    <div class="captions-four clearfix">
        <div class="left">
            <div class="left_top">
                <a href="javascript:;">
                    <img :src="list[0]" alt="">
                </a>
                <a href="javascript:;">
                    <img :src="list[1]" alt="">
                </a>
            </div>
            <div class="left_bottom">
                <a href="javascript:;">
                    <img :src="list[2]" alt="">
                </a>
            </div>
        </div>
        <div class="right">
            <div class="left_top">
                <a href="javascript:;">
                    <img :src="list[3]" alt="">
                </a>
                <a href="javascript:;">
                    <img :src="list[4]" alt="">
                </a>
            </div>
            <div class="left_bottom">
                <a href="javascript:;">
                    <img :src="list[5]" alt="">
                </a>
                <a href="javascript:;">
                    <img :src="list[6]" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'captions-four',

    data() {
        return {
            list: [
                require('../../assets/mncjimg1.png'),
                require('../../assets/mncjimg2.png'),
                require('../../assets/mncjimg3.png'),
                require('../../assets/mncjimg4.png'),
                require('../../assets/mncjimg5.png'),
                require('../../assets/mncjimg6.png'),
                require('../../assets/mncjimg7.png'),

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
.captions-four {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    display: flex;

    img {
        transition: all .5s;
    }

    a:hover img {
        cursor: pointer;
        transform: scale(1.125);
    }

    a {
        display: inline-block;
        width: 100%;
        overflow: hidden;
    }

    .clearfix::after {
        content: '';
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
    }

    .left {
        width: 50%;
        display: flex;
        justify-content: space-between;

        .left_top {
            width: 49%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }

            img:nth-of-type(1) {
                margin-bottom: 5%;
            }
        }

        .left_bottom {
            width: 49%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .right {
        display: flex;
        margin-left: 1%;
        width: 50%;
        justify-content: space-between;

        .left_top {
            width: 49%;
            height: 100%;

            img:nth-of-type(1) {
                margin-bottom: 5%;
            }

            img {
                width: 100%;
            }
        }

        .left_bottom {

            width: 49%;
            height: 100%;

            img:nth-of-type(1) {
                margin-bottom: 5%;
            }

            img {
                width: 100%;
            }
        }
    }
}
</style>