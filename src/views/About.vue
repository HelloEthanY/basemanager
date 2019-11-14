<template>
    <div class="about">
        <h1 style="margin:0 auto;">关于我们</h1>
        <el-button>点击加载数据</el-button>


        <el-container>
            <div id="containera" style="width: 300px;height: 400px"></div>

        </el-container>

    </div>
</template>
<script>

    import BMap from 'BMap'

    export default {
        name: 'About',
        mounted() {
            this.loadBaiduMap();
        },
        data() {
            return {}
        },
        methods: {
            loadData() {
                let _this = this;
                _this.$axios({
                    url: ""
                })
            },
            loadBaiduMap() {
                let map = new BMap.Map("containera");
                // 创建地图实例
                var point = new BMap.Point(116.404, 39.915);
                // 创建点坐标
                map.centerAndZoom(point, 15);
                map.enableScrollWheelZoom(true);
                map.enableDragging();
            }


        }
    }
</script>
<style lang="scss">
    .about{
        background-color: darkcyan;
        width: 100%;
        height: 100%;
    }

</style>


