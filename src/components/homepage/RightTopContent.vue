<template>
    <div class="homepage-right-top-wrapper">
        <el-container direction="vertical">
            <div class="title">反诈骗</div>
            <div class="fraud-phone-title">
                <i class="el-icon-phone"></i>
                举报电话
            </div>
            <div class="fraud-phone-number">
                <div class="fraud-phone-number-left">
                    <div class="fraud-phone-number-left-content-left">
                        <div>处理知道你</div>
                        <div>处理知道你</div>
                    </div>
                    <div class="fraud-phone-number-left-content-right">
                        <span style="color: chocolate;font-size: 16px">0</span>
                        <span style="color: #fff;font-size: 12px">个</span>
                    </div>
                </div>
                <div class="fraud-phone-number-right">
                    <div class="fraud-phone-number-right-content-left">
                        <div>处理知道你</div>
                        <div>处理知道你</div>
                    </div>
                    <div class="fraud-phone-number-right-content-right">
                        <span style="color: chocolate;font-size: 16px">53</span>
                        <span style="color: #fff;font-size: 12px">个</span>
                    </div>
                </div>

            </div>
            <div class="fraud-phone-title">
                <i class="el-icon-phone"></i>
                举报内容
            </div>
            <div id="rt-horizontal-line-chart" style=""></div>

        </el-container>
    </div>
</template>

<script>
    export default {
        name: "RightTopContent",
        mounted() {
            this.initHorizontalLineChart();
        },
        methods: {
            // 线性图
            initHorizontalLineChart() {
                let _this = this;
                let horizontalLineChart = _this.$echarts.init(document.getElementById("rt-horizontal-line-chart"));
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
                            color: '#369'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    grid: { // 内容位置
                        left: '3%',
                        right: '5%',
                        bottom: '3%',
                        top: '8%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            color: '#369'
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#369'
                            }
                        }
                    },
                    series: [{
                        data: [320, 932, 901, 534, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true,
                        areaStyle: {},
                        markPoint: {
                            data: [{
                                type: 'max',
                                name: '最大值'
                            }, {
                                type: 'min',
                                name: '最小值',

                            }],
                            symbolSize:30,
                            label:{
                                color:'#fff',
                                fontSize:8
                            }
                        },
                        itemStyle: {
                            barBorderRadius: [5, 5, 0, 0],
                            normal: {
                                color: new _this.$echarts.graphic.LinearGradient(
                                    0, 1, 0, 0,
                                    [
                                        {offset: 0, color: '#00E6EB'}, // 结束颜色
                                        {offset: 0.5, color: '#00AAC3'},
                                        {offset: 1, color: '#006B9D'}// 开始颜色
                                    ])
                            }
                        }
                    }]
                })
            },
        }
    }
</script>

<style lang="scss">
    .homepage-right-top-wrapper {
        height: 57%;
        width: 92%;
        //  background-color: rgba(20, 60, 98, 0.6);
        background-color: rgba(0, 0, 0, 0.4);
        margin: 2% 2%;
        padding: 0 2%;
        border-radius: 3px;
        border: 1px solid #006B9D;

        .title {
            color: white;
            font-size: 16px;
            margin-top: 10px;
            margin-left: 5px;
        }
        .fraud-phone-title {
            color: #fff;
            font-size: 12px;
            margin-top: 20px;
            margin-left: 15px;
            .el-icon-phone {
                color: #006B9D;
            }
        }
        .fraud-phone-number {
            margin-left: 15px;
            margin-right: 15px;
            margin-top: 10px;
            height: 40px;
            .fraud-phone-number-left {
                float: left;
                height: 40px;
                width: 49%;
                background: -moz-linear-gradient(left, #748EFD 0%, #3391CE 50%, #14AAC3 100%);
                border-radius: 2px;
                .fraud-phone-number-left-content-left {
                    float: left;
                    height: 80%;
                    width: 60%;
                    margin: 5px 5px;
                    text-align: center;
                    div {
                        font-size: 12px;
                        color: #fff;
                        height: 15px;
                    }
                }
                .fraud-phone-number-left-content-right {
                    float: left;
                    width: 30%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
            }
            .fraud-phone-number-right {
                float: left;
                height: 40px;
                width: 49%;
                background: -moz-linear-gradient(left, #748EFD 0%, #3391CE 50%, #14AAC3 100%);
                border-radius: 2px;
                margin-left: 2%;

                .fraud-phone-number-right-content-left {
                    float: left;
                    height: 80%;
                    width: 60%;
                    margin: 5px 5px;
                    text-align: center;
                    div {
                        font-size: 12px;
                        color: #fff;
                        height: 15px;
                    }
                }
                .fraud-phone-number-right-content-right {
                    float: left;
                    width: 30%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
            }
        }

        #rt-horizontal-line-chart {
            width: 90%;
            height: 160px;
            margin-left: 15px;
        }
    }

</style>
