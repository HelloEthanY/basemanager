<template>
    <div class="homepage-left-bottom-wrapper">
        <el-container direction="vertical" style="width: 100%;height: 100%">
            <!--饼状图-->
            <div id="radar-chart" style="width: 100%;height: 100%;margin-top: 10px"></div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "LeftBottomContent",
        mounted() {
            this.initRadarChart();

        },
        methods: {
            initRadarChart() {
                let _this = this;
                var dataSH = [
                    [93, 68, 96, 1.05, 79, 29, 28],
                    [188, 143, 197, 1.66, 99, 51, 29],
                    [174, 131, 174, 1.55, 108, 50, 30],
                    [187, 143, 201, 1.39, 89, 53, 31]
                ];
                let radarChart = _this.$echarts.init(document.getElementById("radar-chart"));
                radarChart.setOption({
                    title: {
                        text: 'AQI - 雷达图',
                        left: 'left',
                        textStyle: {
                            color: '#eee',
                            fontSize: 10
                        }
                    },
                    grid: { // 内容位置
                        position: 'center'
                    },
                    legend: {
                        bottom: 0,
                        left: 0,
                        data: ['上海'],
                        itemGap: 10,
                        textStyle: {
                            color: '#369',
                            fontSize: 10
                        },
                        selectedMode: 'single'
                    },
                    // visualMap: {
                    //     show: true,
                    //     min: 0,
                    //     max: 20,
                    //     dimension: 6,
                    //     inRange: {
                    //         colorLightness: [0.5, 0.8]
                    //     }
                    // },
                    radar: {
                        indicator: [
                            {name: 'AQI', max: 300},
                            {name: 'PM2.5', max: 250},
                            {name: 'PM10', max: 300},
                            {name: 'CO', max: 5},
                            {name: 'NO2', max: 200},
                            {name: 'SO2', max: 100}
                        ],
                        radius: ['0', '42%'],
                        shape: 'circle',
                        splitNumber: 3,
                        name: {
                            textStyle: {
                                color: 'rgb(58,186,255)'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: [
                                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                                ].reverse()
                            }
                        },
                        splitArea: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(238, 197, 102, 0.5)'
                            }
                        }
                    },
                    series: [{
                        name: '上海',
                        type: 'radar',
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.5
                            }
                        },
                        data: dataSH,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: '#369'
                            }
                        },
                        areaStyle: {
                            normal: {
                                opacity: 0.05
                            }
                        }
                    }]
                })
            }
        }
    }
</script>

<style lang="scss">
    .homepage-left-bottom-wrapper {
        height: 24%;
        width: 92%;
        //  background-color: rgba(20, 60, 98, 0.6);
        background-color: rgba(0, 0, 0, 0.4);
        margin: 2% 2%;
        padding: 0 2%;
        border-radius: 3px;
        border: 1px solid #006B9D;
    }
</style>
