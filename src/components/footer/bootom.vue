<template>
    <div class="bootom">
        <el-row>
            <el-col :span="22" :offset="1">
                <div class="grid-content bg-purple-dark">
                    <div class="left">
                        <h2>企业愿景：创新职业教育引领者</h2>
                        <p>Copyright © 2017-2030 北京知进教育科技有限公司(Keep-Forward Education Group) 版权所有</p>
                        <p> 咨询电话：13133269388</p>
                        <p> 校区地址：郑州市上街区中心路41号</p>
                        <p> 网址：http://www.zjjy.cc</p>
                        <p>
                            ICP证：
                            <a class="remark" href="http://beian.miit.gov.cn">
                                京ICP备19043461号-1
                            </a>
                        </p>
                    </div>
                    <div class="right">
                        <img src="@/assets/qrcode.jpg" alt="">
                        <p>知进教育公众号</p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'bootom',

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
.bootom {
    width: 100%;
    padding: 45px 0;
    background: #408df5;
    overflow: hidden;
    height: 300px;
    color: #fff;

    .left {
        float: left;

        h2 {
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            margin-bottom: 10px;
        }

        .remark {
            color: #fff;
        }

        p {
            font-size: 16px;
            color: #fff;
            margin-bottom: 10px;
        }
    }

    .right {
        float: right;
        text-align: center;

        img {
            width: 180px;
        }

        p {
            margin-top: 15px;
            font-size: 16px;
            color: #fff;
            text-align: center;
        }
    }
}
</style>