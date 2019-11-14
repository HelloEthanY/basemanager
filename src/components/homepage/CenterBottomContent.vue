<template>
    <div class="homepage-center-bottom-wrapper">
        <el-container style="width: 100%;height: 100%" direction="horizontal">
            <!--横向柱状图-->
            <div id="horizontal-bar-chart" class="center-bottom-content-left"></div>
            <!--线性图-->
            <div id="horizontal-line-chart" class="center-bottom-content-right"></div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "CenterBottomContent",
        mounted() {
            this.initHorizontalBarChart();
            this.initHorizontalLineChart();
        },
        methods: {
            // 线性图
            initHorizontalLineChart() {
                let _this = this;
                let horizontalLineChart = _this.$echarts.init(document.getElementById("horizontal-line-chart"));
                horizontalLineChart.setOption({
                    title: {
                        id: 'cubicln'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['广州', '南京', '北京', '上海', '贵阳', '重庆', '成都'],
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#00ffcc'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#00ffcc'
                            }
                        }
                    },
                    grid: { // 内容位置
                        left: '3%',
                        right: '5%',
                        bottom: '3%',
                        top: '20%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#00ffcc'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#00ffcc'
                            }
                        }
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        areaStyle: {},
                        itemStyle: {
                            barBorderRadius: [5, 5, 0, 0],
                            normal: {
                                color: new _this.$echarts.graphic.LinearGradient(
                                    0, 1, 0, 0,
                                    [
                                        {offset: 0, color: '#00E6EB'}, // 结束颜色
                                        {offset: 0.5, color: '#9933ff'},
                                        {offset: 1, color: '#9999ff'}// 开始颜色
                                    ])
                            }
                        }
                    }]
                })
            },
            // 横向柱状图
            initHorizontalBarChart() {
                let _this = this;
                let horizontalBarChart = _this.$echarts.init(document.getElementById("horizontal-bar-chart"));
                horizontalBarChart.setOption({
                    title: {
                        text: '世界人口总量',
                        // subtext: '数据来自网络',
                        top: '10',
                        textStyle: {
                            fontSize: 10,
                            color: '#fff'
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        show: false,
                        data: ['2012年'],
                        textStyle: {
                            color: '#369'
                        }
                    },
                    grid: {
                        left: '1%',
                        right: '5%',
                        bottom: '2%',
                        top: '15%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#369'
                            },
                        },
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#369'
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
                        axisTick: {
                            show: false
                        },
                        axisLine: { // 设置y轴坐标线样式
                            show: true,
                            lineStyle: {
                                color: '#369'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#369'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    series: [
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19, 23, 31, 121, 134, 681],
                            itemStyle: {
                                barBorderRadius: [5, 5, 0, 0],
                                normal: {
                                    color: new _this.$echarts.graphic.LinearGradient(
                                        1, 0, 0, 0,
                                        [
                                            {offset: 0, color: '#00E6EB'}, // 结束颜色
                                            {offset: 0.5, color: '#00AAC3'},
                                            {offset: 1, color: '#33ff66'}// 开始颜色
                                        ])
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
</script>

<style lang="scss">

    .homepage-center-bottom-wrapper {
        height: 30%;
        width: 98%;
        margin: 1% 1%;
        padding: 0;

        .center-bottom-content-left {
            height: 100%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 0 2%;
            border-radius: 3px;
            border: 1px solid #006B9D;
        }

        .center-bottom-content-right {
            height: 100%;
            width: 100%;
            margin-left: 2%;
            background-color: rgba(0, 0, 0, 0.4);
            padding: 0 2%;
            border-radius: 3px;
            border: 1px solid #006B9D;
        }
    }
</style>
