<!--折线图-->
<template>
    <div class="line-chart-container">
        <div id="line-chart"></div>
    </div>
</template>
<style lang="scss">
    .line-chart-container {
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

    .line-chart-container:hover {
        border-radius: 5px;
        border: 1px solid white;
    }
</style>
<script>
    export default {
        name: "LineChart",
        mounted() {
            this.initLineChart();
        },
        methods: {
            initLineChart() {
                let _this = this;
                var lineChart = _this.$echarts.init(document.getElementById("line-chart"));
                var option = {
                    title: {
                        text: '折线图',
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    legend: {
                        left: '5%',
                        top: '10%',
                        /* data: ['贵州轻工职业技术学院(双创园)', '贵州医科大学博安众创空间', '贵州师范大学国家大学科技园',
                             '贵州城市职业学院智能（建筑）科技创新孵化园', '贵州财经大学创新创业园', '贵安数字经济产业园']*/
                        data: ['贵州轻工职业技术学院(双创园)', '贵州医科大学博安众创空间'],
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    xAxis: {
                        type: 'category',
                        data: ['贵州轻\n工职业\n技术学\n院(双创园)',
                            '贵州医\n科大学\n博安众\n创空间',
                            '贵州师\n范大学\n国家大\n学科技园',
                            '贵州城\n市职业\n学院智\n能（建筑）\n科技创\n新孵化园',
                            '贵州财\n经大学\n创新创\n业园',
                            '贵安数\n字经济\n产业园'],
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF', // x轴字体颜色
                                fontSize: 10
                            }
                        }
                    },
                    grid: { // 内容位置
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        top:'28%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#FFFFFF', // x轴字体颜色
                                fontSize: 10
                            }
                        }
                    },
                    series: [{
                        name: '贵州轻工职业技术学院(双创园)',
                        data: [932, 901, 934, 0, 0, 1],
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}家',
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 10
                                }
                            }
                        },
                        itemStyle: { // item 条目的样式
                            normal: {
                                color: new _this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#00E6EB'}, // 结束颜色
                                        {offset: 0.5, color: '#00AAC3'},
                                        {offset: 1, color: '#006B9D'}// 开始颜色
                                    ]
                                )
                            }
                        }
                    }, {
                        name: '贵州医科大学博安众创空间',
                        data: [251, 401, 634, 99, 950, 999],
                        type: 'line',
                        label: {
                            normal: {
                                show: true,
                                formatter: '{c}家',
                                textStyle: {
                                    color: '#ffffff',
                                    fontSize: 10
                                }
                            }
                        },
                        itemStyle: { // item 条目的样式
                            normal: {
                                color: new _this.$echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#00E6EB'}, // 结束颜色
                                        {offset: 0.5, color: '#00AAC3'},
                                        {offset: 1, color: '#006B9D'}// 开始颜色
                                    ]
                                )
                            }
                        }
                    }]
                };
                lineChart.setOption(option);
            }
        }
    }
</script>


