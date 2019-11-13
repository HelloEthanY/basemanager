<template>
    <el-container direction="vertical">
        <el-container direction="horizontal" style="width: 100%;">
            <histogram-chart></histogram-chart>
            <line-chart></line-chart>
            <pictorial-chart></pictorial-chart>
        </el-container>
        <el-container direction="horizontal" style="width: 100%;">

        </el-container>
        <el-container direction="horizontal" style="width: 100%;">

        </el-container>
    </el-container>

</template>

<script>
    // 柱状图
    import HistogramChart from '../../components/echarts/HistogramChart'
    import LineChart from '../../components/echarts/LineChart'
    import PictorialChart from '../../components/echarts/PictorialChart'


    export default {
        name: "EchartsChart",
        components: {
            HistogramChart,
            LineChart,
            PictorialChart
        }
    }
</script>

<style scoped>

</style>
