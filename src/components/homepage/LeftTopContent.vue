<!--homePage 左边顶部内容-->
<template>
    <div class="left-top-wrapper">
        <el-container direction="vertical" style="width: 100%">
            <!--线性图-->
            <div id="line-chart" style="width: 100%;height: 33%;margin-top: 10px"></div>
            <!--柱状图-->
            <div id="column-chart" style="width: 100%;height: 33%;margin-top: 10px"></div>
            <!--饼状图-->
            <div id="bread-chart" style="width: 100%;height: 33%;margin-top: 10px"></div>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "LeftTopContent",
        mounted() {
            this.initLineChart();
            this.initColumnChart();
            this.initBreadChart();
        },
        methods: {
            initBreadChart() {
                let _this = this;
                let breadChart = _this.$echarts.init(document.getElementById("bread-chart"));
                breadChart.setOption({
                    title: {
                        text: '某站点用户访问来源',
                        // subtext: '纯属虚构',
                        x: 'left',
                        textStyle: {
                            fontSize: 10,
                            color: '#ffffff'
                        }
                    },
                    grid: { // 内容位置
                        left: '10%',
                        right: '3%',
                        bottom: '3%',
                        top: '40%',
                        containLabel: true
                    },
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        show: true,
                        x: 'left',
                        itemHeight: 10,
                        itemWidth: 10,
                        orient: 'vertical',
                        left: 'left',
                        top: '24%',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
                        textStyle: {
                            fontSize: 10,
                            color: '#369'
                        }
                    },
                    color: ['rgb(203,155,255)', 'rgb(149,162,255)', 'rgb(58,186,255)',
                        'rgb(119,168,249)', 'rgb(235,161,159)'],
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            top: '10%',
                            center: ['50%', '60%'],
                            avoidLabelOverlap: false,
                            radius: ['30%', '60%'],
                            data: [
                                {value: 335, name: '直接访问'},
                                {value: 310, name: '邮件营销'},
                                {value: 234, name: '联盟广告'},
                                {value: 135, name: '视频广告'},
                                {value: 1548, name: '搜索引擎'}
                            ],
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: false,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
            },
            // 柱状图
            initColumnChart() {
                let _this = this;
                let histogramChart = _this.$echarts.init(document.getElementById("column-chart"));
                let dataAxis = ['广州', '上海', '北京', '天津', '南京', '贵阳', '重庆', '成都'];
                let data = [460, 425, 483, 302, 310, 120, 250, 290];
                let yMax = 500;
                let dataShadow = [];
                for (let i = 0; i < data.length; i++) {
                    dataShadow.push(yMax);
                }
                let histogramOptions = {
                    title: {
                        text: '柱状图',
                        //  subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom',
                        textStyle: {
                            color: '#fff',
                            fontSize: 10
                        }
                    },
                    grid: { // 内容位置
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: dataAxis,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#369'
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
                                color: '#369'
                            }
                        },
                        splitLine: {
                            lineStyle: {
                                color: '#369'
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
            },
            // 线性图
            initLineChart() {
                let _this = this;
                let lineChart = _this.$echarts.init(document.getElementById("line-chart"));
                lineChart.setOption({
                    title: {
                        text: '折线图',
                        textStyle: {
                            color: '#fff',
                            fontSize: 10
                        }
                    },
                    legend: {
                        right: '5%',
                        top: '5%',
                        /* data: ['贵州轻工职业技术学院(双创园)', '贵州医科大学博安众创空间', '贵州师范大学国家大学科技园',
                             '贵州城市职业学院智能（建筑）科技创新孵化园', '贵州财经大学创新创业园', '贵安数字经济产业园']*/
                        data: ['双创园'],
                        textStyle: {
                            color: '#369'
                        }
                    },
                    grid: { // 内容位置
                        left: '3%',
                        right: '3%',
                        bottom: '3%',
                        top: '20%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisLabel: {
                            textStyle: {
                                color: '#369', // x轴字体颜色
                                fontSize: 10
                            }
                        },
                        axisLine: { // x 坐标轴线的样式
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                            textStyle: {
                                color: '#369', // x轴字体颜色
                                fontSize: 10
                            }
                        },
                        axisLine: { // y 坐标轴线的样式
                            lineStyle: {
                                color: '#369'
                            }
                        },
                        splitLine: {// y 坐标轴线分隔线的样式
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        name: '双创园',
                        label: {
                            normal: {
                                show: false,
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
                })

            }
        }
    }
</script>

<style lang="scss">
    .left-top-wrapper {
        height: 70%;
        width: 92%;
      //  background-color: rgba(20, 60, 98, 0.6);
        background-color: rgba(0, 0, 0, 0.4);
        margin: 2% 2%;
        padding: 0 2%;
        border-radius: 3px;
        border: 1px solid #006B9D;
    }

</style>
