<template>
    <div class="quality">
        <div class="name">素质课堂天天见</div>
        <div class="szktlist">
            <div class="item">
                <h3>前晚自习</h3>
                <p>开会分析数据<br>
                    开会定目标<br>
                    写作业阅读思考</p>
            </div>
            <div class="item">
                <h3>上课</h3>
                <p>上课礼仪不能少<br>
                    礼仪之后要宣誓或者课程口号<br>
                    开晨会宣读今日目标</p>
            </div>
            <div class="item">
                <h3>前晚自习</h3>
                <p>课礼仪不能少：老师辛苦<br>
                    下课礼仪不能少：老师再见
                </p>
            </div>
            <div class="item">
                <h3>前晚自习</h3>
                <p>老师辅导<br>
                    学生写作业<br>
                    日总结会</p>
            </div>
        </div>
        <div class="img">
            <img src="../../../assets/szktimg.png" alt="">
        </div>
        <div class="szktlist  szktlisttwo">
            <div class="item">
                <h3>晨读</h3>
                <p>晨读之前两件事<br>
                    气宇轩昂，斗志昂扬
                </p>
            </div>
            <div class="item">
                <h3>课堂讲课</h3>
                <p>课前回顾<br>
                    作业检查<br>
                    本课教学方案执行<br>
                    知识扩充-组织课<br>
                    课后作业
                </p>
            </div>
            <div class="item">
                <h3>晨读</h3>
                <p>上下午三节课开始后十分钟做操<br>
                    眼保健操或者室内律动操
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'quality',

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
.quality {
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;

    .name {
        width: 404px;
        margin-bottom: 150px;
        height: 93px;
        line-height: 93px;
        font-size: 36px;
        font-weight: bold;
        margin: 0 auto 70px;
        background: url(../../../assets/xsfmtitle.png) 0 0 no-repeat;
        background-size: 100% 100%;
        text-align: center;
        margin-top: 100px;
    }

    .szktlist {
        display: flex;
        padding: 0 30px;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: flex-end;
        margin-bottom: 20px;

        h3 {
            font-size: 18px;
            line-height: 30px;
            font-weight: bold;
            text-align: center;
        }

        p {
            font-size: 16px;
            text-align: center;
            line-height: 36px;
        }
    }

    .szktlisttwo {
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 20px;

        .item:nth-of-type(1) {
            margin-left: 145px;
        }

        .item:nth-of-type(2) {
            margin: 0 170px 0 215px;
        }

        .item:nth-of-type(3) {
            margin-right: 30px;
        }
    }
}
</style>