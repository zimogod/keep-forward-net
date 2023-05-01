<template>
    <div class="journalism">
        <a href="javascript:;" v-for="(item, index) in journalism" :key="index">
            <div class="img">
                <img :src="item.path" alt="">
            </div>
            <div class="info">
                <h3>
                    <span class="biaoti">{{ item.title }}</span>
                    <span class="time">{{ item.timer }}</span>
                </h3>
                <p> {{ item.content }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'journalism',
    props: ['journalism'],
    // journalism: [
    //             {
    //                 path: require('../../assets/210908120806820.jpg'),
    //                 title: '选互联网专业，好工作“职”等你来',
    //                 timer: '2022-12-05',
    //                 content: '回看2001年，当时全国毕业大学生只有114万人。时光飞逝转眼到了2022年，这一数字竟翻了将近10倍！规模和数量都达到了史无前例的1076万人。'
    //             }
    //         ]
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
.journalism {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto 70px;

    a:first-child {
        border-top: 1px solid #dbdbdb;
    }

    a:hover {
        box-shadow: 0 0 20px #ccc;
    }

    a {
        display: block;
        width: 100%;
        padding: 18px 0;
        border-bottom: 1px solid #dbdbdb;
        display: flex;

        .img {
            width: 180px;
            height: 120px;

            img {
                width: 100%;
                height: 90px;
            }
        }

        .info {
            flex: 1;
            margin-left: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h3 {
                width: 100%;
                margin-bottom: 18px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .biaoti {
                    font-size: 18px;
                    font-weight: bold;
                    color: #000;
                }

                .time {
                    color: #999999;
                }
            }

            p {
                font-size: 16px;
                color: #444;
                line-height: 25px;
            }
        }
    }
}
</style>