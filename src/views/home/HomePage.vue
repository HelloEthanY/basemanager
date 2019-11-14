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
                    <div style=" height: 64%;width: 98%;margin: 1%;" id="container"></div>
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
    }

</style>
<script>
    import BMap from 'BMap'

    import LeftTopContent from '../../components/homepage/LeftTopContent'
    import LeftBottomContent from '../../components/homepage/LeftBottomContent'
    import RightTopContent from '../../components/homepage/RightTopContent'
    import RightBottomContent from '../../components/homepage/RightBottomContent'
    import CenterBottomContent from '../../components/homepage/CenterBottomContent'

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
            CenterBottomContent
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
                let map = new BMap.Map("container");
                // 创建地图实例
                var point = new BMap.Point(116.404, 39.915);
                // 创建点坐标
                map.centerAndZoom(point, 15);
                map.enableScrollWheelZoom(true);
                map.enableDragging();
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

