<template>
    <div class="terrace">
        <biao-ti :title="title"></biao-ti>

        <el-row>
            <el-col :span="6" :offset="2">
                <div class="grid-content bg-purple">
                    <div class="terrace_container">
                        <div class="sbx">
                            <span>1</span>
                        </div>
                        <h4>为学员提供全面保障的就业服务</h4>
                        <p>从用人单位的储备、学员岗前职素和技术的强化训练、就业服务协议的签订、以及就业后的定期回访等为学员提供立体的就业保障。</p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="1">
                <div class="grid-content bg-purple">
                    <div class="terrace_container">
                        <div class="sbx">
                            <span>2</span>
                        </div>
                        <h4>为学员制定科学的职业生涯规划</h4>
                        <p>对于学员乃至任何社会人而言，职业生涯规划是必不可少的，就业部从学员入校开始就针对个体差异进行职业规划，从确定人生志向、自我评估、职业机会把握、职业的选择、职业目标确定、职业发展路线、行动方案、评估与反馈等方面进行科学系统的职业生涯规划。
                        </p>
                    </div>
                </div>
            </el-col>
            <el-col :span="6" :offset="1">
                <div class="grid-content bg-purple">
                    <div class="terrace_container">
                        <div class="sbx">
                            <span>3</span>
                        </div>
                        <h4>终身职业教育服务</h4>
                        <p>进思学校建立完善的职业发展服务平台，建立有专业的技术服务团队，全面跟踪已就业的学员，随时了解他们的情况，学员在职业发展过程中，遇到职场问题、技术问题等都可以获得咨询和服务，学员也可以通过在线学习进下的提升自己的再就业能力。
                        </p>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import biaoTi from './biaoti.vue'

export default {
    name: 'terrace',
    components: {
        biaoTi
    },
    data() {
        return {
            title: ['进思提供终身学习平台']
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="less" scoped>
.terrace {
    .el-col:nth-of-type(2) {
        .terrace_container {
            background: #fef6ed;
        }

        .sbx {
            background: #faa850;
        }
    }

    .el-col:nth-of-type(3) {
        .terrace_container {
            background: #fef6ed;
        }

        .sbx {
            background: #fa5051;
        }
    }

    .terrace_container {
        height: 560px;
        background: #edf7fe;
        padding: 100px 35px;
        margin-top: 100px;
        position: relative;

        .sbx {
            position: absolute;
            top: 0;
            left: 50%;
            width: 75px;
            height: 75px;
            margin: -37px auto 60px;
            text-align: center;
            line-height: 75px;
            font-size: 72px;
            color: #fff;
            background: #50b4fa;
            transform: translate(-50%) rotateZ(45deg);

            span {
                transform: rotateZ(-45deg);
                display: block;
            }
        }



        h4 {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            font-size: 16px;
            line-height: 36px;
        }
    }
}
</style>