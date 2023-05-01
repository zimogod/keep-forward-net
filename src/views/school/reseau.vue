<template>
    <div class="reseau ">
        <ul class="clearfix">
            <li>
                <div class="one">
                    <img src="@/assets/xueyimg1.png" alt="">
                </div>
            </li>
            <li>
                <div class="text">
                    <h4>就业方向：JAVA，大数据</h4>
                    <h5>就业薪资：月薪过万，年薪10万以上</h5>
                    <p>学期有10期，16期，26期，36期可选，<br />可学习2个及以上的专业技术。</p>
                    <a href="#">点击咨询</a>
                </div>
            </li>
            <li>
                <div class="one">
                    <img src="@/assets/xueyimg2.png" alt="">
                </div>
            </li>
            <li>
                <div class="text">
                    <h4>就业方向：电商运营，UI设计，<br>&emsp;&emsp;&emsp;&emsp;&emsp;产品运营</h4>
                    <h5>就业薪资：月薪过万，年薪10万以上</h5>
                    <p>学期有10期，16期，26期，36期可选，<br />可学习2个及以上的专业技术。</p>
                    <a href="#">点击咨询</a>
                </div>
            </li>
            <li>
                <div class="text">
                    <h4>就业方向：H5，WEB架构，WEB全栈</h4>
                    <h5>就业薪资：月薪过万，年薪10万以上</h5>
                    <p>学期有10期，16期，26期，36期可选，<br />可学习2个及以上的专业技术。</p>
                    <a href="#">点击咨询</a>
                </div>
            </li>
            <li>
                <div class="one">
                    <img src="@/assets/xueyimg3.png" alt="">
                </div>
            </li>
            <li>
                <div class="text">
                    <h5>教学目的：着重素质教育+技能培训</h5>
                    <p>着重培养学员个人成长，提升其参与社会的能力、逻辑思维、个人魅力及文化素养。教给学员时兴实用的IT技术和职场人必备技术。</p>
                    <a href="#">点击咨询</a>
                </div>
            </li>
            <li>
                <div class="one">
                    <img src="@/assets/xueyimg4.png" alt="">
                </div>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'reseau',

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
.reseau {
    width: 1200px;
    margin: 0 auto;

    .clearfix::after {
        content: '';
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }

    ul li:nth-of-type(4)>div {
        padding: 20px 20px 0;
    }

    ul {

        li:nth-of-type(6),
        li:nth-of-type(8) {
            .one {
                img {
                    left: -17px;
                }
            }
        }

        li>.text {
            position: relative;
            z-index: 20;
            padding: 40px 20px 0;
            box-shadow: 0 0 10px #ccc;
        }

        li>div {
            width: 100%;
            height: 260px;
            position: relative;
        }

        li {
            width: 25%;
            height: 260px;
            float: left;

            .one {
                width: 317px;

                img {
                    position: absolute;
                    left: 0;
                    z-index: 25;
                    width: 317px;
                    height: 260px;
                }
            }
        }

        li>div.text {
            h4 {
                font-weight: bold;
                font-size: 16px;
                color: #000;
                margin-bottom: 15px;
                letter-spacing: -1px;
            }

            h5 {
                font-weight: bold;
                font-size: 16px;
                color: #ff0000;
                margin-bottom: 15px;
            }

            p {
                font-size: 14px;
                line-height: 22px;
                margin-bottom: 20px;
            }

            a:hover {
                box-shadow: 0 0 20px #ff3e3e;
            }

            a {
                display: block;
                width: 160px;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 40px;
                background: #ff3e3e;
                margin: 0 auto;
                font-size: 16px;
                color: rgba(255, 255, 255, .8);
                transition: all .2s linear;
            }
        }
    }
}
</style>