<!-- 柱状图 -->
<template>
    <div class="histogram-chart-container">
        <div id="histogram-chart"></div>
    </div>
</template>
<style lang="scss">
    .histogram-chart-container {
        height: 320px;
        width: 31%;
        margin-top: 20px;
        margin-left: 20px;
        background-color: #0D3B6F;
        box-shadow: 0 0 5px 5px #0D3B6F;
        border: 1px solid #0D3B6F;
        border-radius: 5px;
        div {
            height: 100%;
            width: 100%;
        }
    }

    .histogram-chart-container:hover {
        border-radius: 5px;
        border: 1px solid white;
    }

</style>

<script>
    export default {
        name: "HistogramChart",
        props: {},
        mounted() {
            this.initHistogramChart();
        },
        data() {
            return {}
        },
        methods: {
            initHistogramChart() {
                let _this = this;
                let histogramChart = _this.$echarts.init(document.getElementById("histogram-chart"));
                let dataAxis = ['测试', '测试', '测试', '测试', '测试', '测试', '测试', '测试'];
                let data = [220, 182, 191, 234, 290, 330, 310, 123];
                let yMax = 500;
                let dataShadow = [];
                for (let i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }
                let histogramOptions = {
                    title: {
                        text: '特性示例：渐变色 阴影 点击缩放',
                        subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: dataAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#369'
                            },
                        }
                    },
                    yAxis: {
                        axisLine: { // 设置y轴坐标线样式
                            show: true,
                            lineStyle: {
                                color: '#369'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    /* dataZoom: [ // 缩放
                         {
                             type: 'inside'
                         }
                     ],*/
                    series: [
                        { // 阴影设置
                            type: 'bar',
                            itemStyle: {
                                barBorderRadius: [5, 5, 0, 0],
                                normal: {color: 'rgba(0,0,0,0)'}
                            },
                            barGap: '-100%',
                            barCategoryGap: '40%',
                            data: dataShadow,
                            animation: false
                        },
                        {
                            type: 'bar',
                            itemStyle: {
                                barBorderRadius: [5, 5, 0, 0],
                                normal: {
                                    color: new _this.$echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: '#00E6EB'}, // 结束颜色
                                            {offset: 0.5, color: '#00AAC3'},
                                            {offset: 1, color: '#006B9D'}// 开始颜色
                                        ]
                                    )
                                }/*,
                emphasis: { // 鼠标移动到的内容
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }*/
                            },
                            data: data
                        }
                    ]
                };
                histogramChart.setOption(histogramOptions)
            }
        }
    }
</script>


