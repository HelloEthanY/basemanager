<template>
    <div class="homepage-center-top-wrapper">
        <div id="container"></div>
    </div>
</template>

<script>
    import BMap from 'BMap'

    export default {
        name: "CenterBottomContent",
        mounted() {
            // this.loadScript();
            this.loadBaiduMap();
        },
        methods: {
            /*// 异步加载百度地图
            loadScript() {
                var script = document.createElement("script");
                script.src = "http://api.map.baidu.com/api?v=2.0&ak=yzob0doDU75trAA7KLOg3F0GDYuxC6Ca&callback=initialize";
                document.body.appendChild(script);
            },*/
            loadBaiduMap() {
                let map = new BMap.Map("container1");
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

    .homepage-center-top-wrapper {
        height: 64%;
        width: 98%;
        margin: 1%;
        padding: 0;

        div {
            width: 100%;
            height: 100%;
        }
    }

</style>
