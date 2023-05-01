<template>
    <div class="meansEcharts">
        <div class="Echarts">
            <div id="main1"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'meansEcharts',

    data() {
        return {

        };
    },

    mounted() {
        this.myEcharts();
    },

    methods: {
        myEcharts() {
            const setEchartWH = {
                width: 700,
                height: 550
            }
            const myChart = this.$echarts.init(document.getElementById('main1'), null, setEchartWH);
            //配置图表
            var option = {
                title: {
                    // text: 'Referer of a Website',
                    // subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                // legend: {
                //     orient: 'vertical',
                //     left: 'left'
                // },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '80%',
                        data: [
                            { value: 1048, name: '项目分析' },
                            { value: 735, name: '知识讲解' },
                            { value: 580, name: '课堂练习' },
                            { value: 484, name: '课后项目' },
                            { value: 300, name: '知识拓展' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        "label": {
                            "normal": {
                                "show": true,
                                "textStyle": {
                                    "fontSize": 28
                                }
                            }
                        }
                    },
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>

<style lang="less" scoped>
.meansEcharts {
    width: 650px;
    height: 570px;
    margin-left: 20px;

    .Echarts {
        width: 100%;
        height: 100%;
    }
}
</style>