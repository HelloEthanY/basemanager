<template>
    <div class="home-page-wrapper">
        <el-container style="width: 100%;" direction="vertical">
            <el-container style="width: 100%;height: 5%">
                <div class="header-content">
                    <div class="header-time" id="home-time">{{date}}
                    </div>
                    <div class="header-title">练习感知首页平台</div>
                </div>
            </el-container>
            <el-container style="height:95% ;width: 100%" direction="horizontal">
                <el-container direction="vertical" style="width: 24%;height: 100%;">
                    <left-top-content></left-top-content>
                    <left-bottom-content></left-bottom-content>
                </el-container>
                <el-container direction="vertical" style="width: 52%;height: 100%;">
                    <!--百度地图-->
                    <div class="baidu-map-container" id="container"></div>
                    <!-- <center-top-content></center-top-content>-->
                    <center-bottom-content></center-bottom-content>
                </el-container>
                <el-container direction="vertical" style="width: 24%;height: 100%;">
                    <right-top-content></right-top-content>
                    <right-bottom-content></right-bottom-content>
                </el-container>
            </el-container>
        </el-container>
    </div>

</template>

<style lang="scss">
    .home-page-wrapper {
        width: 100%;
        height: 100%;
        background: url("../../assets/ic_homepage_bg.png") no-repeat;
        background-size: 100% 100%;
        margin: 0;
        padding: 0;

        .header-content {
            height: 30px;
            width: 100%;
            line-height: 30px;
            text-align: center;

            .header-time {
                float: left;
                position: fixed;
                margin-left: 10px;
                color: #50C6E8;
            }

            .header-title {
                text-align: center;
                height: 30px;
                line-height: 30px;
                margin: 0 auto;
                font-size: 20px;
                font-weight: bold;
                /*设置从顶部到底部的颜色渐变*/
                background: linear-gradient(to bottom, #50C6E8, #2997D6, #072639);
                -webkit-background-clip: text;
                color: transparent;
                /*结束*/
            }
        }
        /*百度地图样式*/
        .baidu-map-container {
            height: 64%;
            width: 98%;
            margin: 1%;
            border-radius: 3px;
            background-color: rgba(0, 0, 0, 0.4);
            border: 1px solid #006B9D;
            // 去掉百度地图logo
            .anchorBL {
                display: none;
            }
        }
    }

</style>
<script>
    import BMap from 'BMap'

    import LeftTopContent from '../../components/homepage/LeftTopContent'
    import LeftBottomContent from '../../components/homepage/LeftBottomContent'
    import RightTopContent from '../../components/homepage/RightTopContent'
    import RightBottomContent from '../../components/homepage/RightBottomContent'
    import CenterBottomContent from '../../components/homepage/CenterBottomContent'
    //import CenterTopContent from '../../components/homepage/CenterTopContent'
    // 导入百度地图个性化json数据文件
    import mapJS from '../../../public/static/custom_map_config.json'


    export default {
        name: "HomePage",
        data() {
            return {
                date: "正在加载中..."
            }
        },
        components: {
            LeftTopContent,
            LeftBottomContent,
            RightTopContent,
            RightBottomContent,
            CenterBottomContent,
            // CenterTopContent
        },
        beforeDestroy: function () {
            //实例销毁前青出于定时器
            if (this.timeId) {
                clearInterval(this.timeId);
            }
        },
        mounted() {
            //创建定时器更新时间
            var _this = this;
            this.timeId = setInterval(function () {
                _this.date = _this.getHomeNowTime();
            }, 1000);
            // 加载百度地图
            this.loadBaiduMap();
        },
        methods: {
            // 加载百度地图
            loadBaiduMap() {
                // 创建百度地图实例
                let map = new BMap.Map("container");
                /***********创建一个全景控制器*************/
                let stCtrl = new BMap.PanoramaControl();
                stCtrl.setOffset(new BMap.Size(20, 20));
                // 对地图设置全景控制器
                map.addControl(stCtrl);
                // 创建地图坐标点实例
                let point = new BMap.Point(106.634291, 26.406715);
                // 设置地图中心点及缩放比例
                map.centerAndZoom(point, 7);
                // 设置通过滑动鼠标收缩地图大小
                map.enableScrollWheelZoom(true);
                // 设置能移动地图，默认能移动
                map.enableDragging();
                // 设置个性化地图ID和json样式
                map.setMapStyleV2({
                    styleId: 'affb66a97d9134caa00a7a7713efef88',
                    styleJson: mapJS
                });
            },
            // 获取当前时间
            getHomeNowTime() {
                let _this = this;
                var date = new Date();
                var year = date.getFullYear();      //存储年
                var month = _this.padaDate(date.getMonth() + 1);    //存储月份
                var day = _this.padaDate(date.getDate());         //存储日期
                var hours = _this.padaDate(date.getHours());      //存储时
                var minutes = _this.padaDate(date.getMinutes());  //存储分
                var seconds = _this.padaDate(date.getSeconds());  //存储秒
                //返回格式化后的日期
                return year + '-' + month + '-' + day + ' ' + hours + '-' + minutes + '-' + seconds;
            },
            // 计算时间
            padaDate(value) {
                return value < 10 ? '0' + value : value;
            }
        }
    }
</script>

