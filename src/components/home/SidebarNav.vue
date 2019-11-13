<template>
    <div class="left_nav_wrapper">
        <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <el-menu-item @click="onClickLeftNav('首页')" index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>干货管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-on:click="onClickLeftNav('toDay')" index="2-1">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">今日推荐</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('Android')" index="2-2">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">Android</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('前端')" index="2-3">
                        <i class="el-icon-location"></i>
                        <span slot="title">前端</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('拓展资源')" index="5-4">
                        <i class="el-icon-location"></i>
                        <span slot="title">拓展资源</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('all')" index="5-5">
                        <i class="el-icon-location"></i>
                        <span slot="title">all</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span>我的内容</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item v-on:click="onClickLeftNav('echarts')" index="3-1">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">echarts图表</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('Android')" index="3-2">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">Android</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('Android')" index="3-3">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">Android</span>
                    </el-menu-item>
                    <el-menu-item v-on:click="onClickLeftNav('Android')" index="3-4">
                        <i class="el-icon-s-marketing"></i>
                        <span slot="title">Android</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item @click="onClickLeftNav('about')" index="4">
                <i class="el-icon-s-custom"></i>
                <span slot="title">关于我们</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: 'sidebarNav',
        data() {
            return {}
        },
        mounted() {
            this.$router.push({path: '/homePage'});
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            onClickLeftNav(index) {
                let _this = this;
                switch (index) {
                    case "首页":
                        _this.$router.push({path: '/homePage'});
                        break;
                    case "toDay":
                        _this.$router.push({path: '/gankDay'});
                        break;
                    case "Android":
                        _this.$router.push({path: '/gankAndroid'});
                        break;
                    case "前端":
                        _this.$router.push({path: '/gankHtml'});
                        break;
                    case "拓展资源":
                        _this.$router.push({path: '/gankResources'});
                        break;
                    case "all":
                        _this.$router.push({path: '/gankAll'});
                        break;
                    case "about":
                        _this.$router.push({path: '/about'});
                        break;
                    case "echarts":
                        _this.$router.push({path: '/echartsChart'});
                        break;
                }
            }
        },
        components: {}
    }
</script>
<style lang="scss">
    .left_nav_wrapper {
        width: 100%;
        margin: 0;
        overflow: hidden;
        padding: 0;
        height: 100%;
        background-color: #545c64;
        font-size: 14px;
    }

    .el-menu {
        width: 100%;
    }
</style>

