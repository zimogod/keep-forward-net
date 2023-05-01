<template>
    <div class="career">
        <div class="career_container">
            <div class="title">
                <h2>专业介绍</h2>
                <div class="line"></div>
            </div>
            <div class="img">
                <img src="@/assets/wlwzyjsname.png" alt="">
            </div>
            <p class="content">物联网全栈开发者是具有互联网交互设计能力，熟悉后端服务器运行环境和数据通信协议，掌握
                React、Vite、VueJS、NodeJS等多门技术的人才。作为互联网“新贵”，可以在多个工作岗位上任职。</p>
            <div class="target">
                <div class="first">
                    <div class="inner">
                        <h3>培养目标：</h3>
                        <p>高级前端、移动端工程师、高级架构师、物联网全栈工程师</p>
                    </div>
                </div>
                <div class="first">
                    <div class="inner">
                        <h3>就业方向：</h3>
                        <p>IT软件公司、电商企业、航天科研、各大企业、事业单位、政府单位等</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'career',

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
.career {
    background: url(@/assets/sdxy-zyjsbg.png);

    .career_container {
        width: 95%;
        max-width: 1200px;
        margin: 0 auto;
        padding-top: 50px;
        padding-bottom: 80px;

        .title {
            width: 100%;

            h2 {
                color: #fff;
                margin-bottom: 10px;
                font-size: 36px;
                font-weight: bold;
                text-align: center;
            }

            .line {
                width: 80px;
                height: 4px;
                border-radius: 4px;
                background: #000000;
                margin: 0 auto 20px;
                background: #fff;
            }
        }

        .img {
            text-align: center;
            margin: 40px 0;
        }

        .content {
            font-size: 18px;
            line-height: 36px;
            color: #fff;
            text-indent: 2em;
            margin-bottom: 40px;
        }

        .target {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .first:nth-of-type(2) {
                background: #1e9dff;
                padding: 15px 15px 15px 0;
                border-radius: 0 5px 5px 0;

                .inner {
                    border: 1px solid #fff;
                    border-left-width: 0;

                    h3 {
                        margin-bottom: 0;
                    }
                }
            }

            .first {
                width: 48%;
                height: 150px;
                padding: 15px 0 15px 15px;
                border-radius: 5px 0 0 5px;
                background: #00a7d1;
                box-shadow: 0 0 2px #000;

                .inner {
                    border: 1px solid #fff;
                    border-right-width: 0;
                    width: 100%;
                    height: 100%;
                    padding-left: 20px;
                    padding-right: 20px;
                    padding-top: 15px;

                    h3 {
                        font-weight: bold;
                        color: #fff;
                        margin-bottom: 10px;
                        font-size: 22px;
                    }

                    p {
                        font-size: 18px;
                        color: #fff;
                        text-indent: 0;
                        line-height: 30px;
                    }
                }
            }
        }
    }
}
</style>