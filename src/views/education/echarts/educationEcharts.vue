<template>
    <div class="eductionEcharts">
        <div class="Echarts">
            <div id="main"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'eductionEcharts',

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
                height: 650
            }
            const myChart = this.$echarts.init(document.getElementById('main'), null, setEchartWH);
            //配置图表
            var option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    textStyle:{
                        fontSize:30
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: 40,
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: '计划' },
                            { value: 1048, name: '大纲' },
                            { value: 1048, name: '教案' },
                            { value: 1048, name: '课件' },
                            { value: 1548, name: '练习' },
                            { value: 1548, name: '项目' },
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>

<style lang="less" scoped>
.eductionEcharts {
    width: 650px;
    height: 570px;
    margin-left: 20px;

    .Echarts {
        width: 100%;
        height: 100%;
    }
}
</style>