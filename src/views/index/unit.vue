<template>
    <div class="unit">
        <div class="container">
            <div class="title">
                <h2>推荐就业，高新入职</h2>
                <h3>就业生遍布全国各大IT企业</h3>
            </div>
            <div class="con8list">
                <ul class="conlist clearfix">
                    <li v-for="(item, index) in list" :key="index">
                        <img :src="item.path" alt="">
                    </li>
                </ul>
            </div>
            <a href="javascript:;" class="djzx">点击咨询</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'unit',

    data() {
        return {
            list: [
                {
                    path: require('../../assets/jyimg1.png')
                },
                {
                    path: require('../../assets/jyimg2.png')
                },
                {
                    path: require('../../assets/jyimg3.png')
                },
                {
                    path: require('../../assets/jyimg4.png')
                },
                {
                    path: require('../../assets/jyimg5.png')
                },
                {
                    path: require('../../assets/jyimg6.png')
                },
                {
                    path: require('../../assets/jyimg7.png')
                },
                {
                    path: require('../../assets/jyimg8.png')
                },
                {
                    path: require('../../assets/jyimg9.png')
                },
                {
                    path: require('../../assets/jyimg10.png')
                },
                {
                    path: require('../../assets/jyimg11.png')
                },
                {
                    path: require('../../assets/jyimg12.png')
                },
                {
                    path: require('../../assets/jyimg13.png')
                },
                {
                    path: require('../../assets/jyimg14.png')
                },
                {
                    path: require('../../assets/jyimg15.png')
                },
                {
                    path: require('../../assets/jyimg16.png')
                },
                {
                    path: require('../../assets/jyimg17.png')
                },
                {
                    path: require('../../assets/jyimg18.png')
                },
                {
                    path: require('../../assets/jyimg19.png')
                },
                {
                    path: require('../../assets/jyimg20.png')
                },
                {
                    path: require('../../assets/jyimg21.png')
                },
                {
                    path: require('../../assets/jyimg22.png')
                },
                {
                    path: require('../../assets/jyimg23.png')
                },
                {
                    path: require('../../assets/jyimg24.png')
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
.unit::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-top: 0px solid transparent;
    border-right: 28px solid transparent;
    border-bottom: 28px solid #fff;
    border-left: 28px solid transparent;
}

.unit {
    padding-bottom: 105px;
    background: #408df5;
    position: relative;
    overflow: hidden;

    .container {
        width: 95%;
        margin: 0 auto;
        max-width: 1200px;

        .title {
            width: 100%;
            color: #000000;
            margin: 60px auto;
            text-align: center;
            overflow: hidden;
            color: #fff;

            h2 {
                font-size: 60px;
                font-weight: bold;
            }

            h3 {
                font-size: 30px;
                margin-bottom: 25px;
            }
        }

        .con8list {
            .clearfix::after {
                content: '';
                display: block;
                height: 0;
                visibility: hidden;
                clear: both;
            }

            .conlist {
                width: 1350px;
                margin: 0 auto 80px;

                li:nth-of-type(9) {
                    margin-left: 77px;
                }

                li {
                    margin-top: -20px;
                    float: left;
                    width: 140px;
                    height: 160px;
                    margin-right: 19px;
                }
            }
        }

        .djzx:hover {
            background: #fff;
            color: #000;
            box-shadow: 0 0 20px #047df7;
        }

        .djzx {
            background: #047df7;
            color: #fff;
            width: 300px;
            height: 60px;
            display: block;
            margin: 0 auto;
            border-radius: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
            transition: all .3s linear;
        }
    }
}
</style>