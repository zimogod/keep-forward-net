<template>
    <div class="qualityEcharts">
        <div class="Echarts">
            <div id="main2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'qualityEcharts',

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
            const myChart = this.$echarts.init(document.getElementById('main2'), null, setEchartWH);
            //配置图表
            var option = {
                title: {
                    // text: 'Nightingale Chart',
                    // subtext: 'Fake Data',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: [
                        'rose1',
                        'rose2',
                        'rose3',
                        'rose4'
                    ],

                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                series: [
                    {
                        name: 'Area Mode',
                        type: 'pie',
                        radius: [20, 260],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data: [
                            { value: 30, name: '学生座谈' },
                            { value: 28, name: '日常检查' },
                            { value: 26, name: '三级听课' },
                            { value: 24, name: '教学测评' }
                        ],
                        "label": {
                            "normal": {
                                "show": true,
                                "textStyle": {
                                    "fontSize": 28
                                }
                            }
                        }
                    }
                ]
            };
            myChart.setOption(option);
        }
    },
};
</script>

<style lang="less" scoped>
.qualityEcharts {
    width: 650px;
    height: 570px;
    margin-left: 20px;

    .Echarts {
        width: 100%;
        height: 100%;
    }
}
</style>