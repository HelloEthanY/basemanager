<template>
    <div class="home">
        <el-container>
            <el-header :height="header_height.height">
                <Header :circleUrl="circleUrl" @getCloseNav="closeNav"></Header>
            </el-header>
            <el-container>
                <el-aside id="left_nav" width="200px">
                    <side-bar-nav></side-bar-nav>
                </el-aside>
                <el-container direction="vertical" style="background-color: white;display: block;">
                    <el-main style="padding: 0 0 0 0;">
                        <router-view></router-view>
                    </el-main>
                    <el-footer id="footer" :height="footer_height.height">
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    import sideBarNav from '../../components/home/SidebarNav.vue'
    import Header from '../../components/home/Header.vue'

    export default {
        name: 'home',
        components: {
            sideBarNav,
            Header
        },
        data() {
            return {
                header_height: {
                    height: '40px'
                },
                footer_height: {
                    height: '40px'
                },
                circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
            }
        },
        methods: {
            // 点击是否关闭导航
            closeNav(isCloseNav) {
                let footer = document.getElementById("footer");
                let leftNav = document.getElementById("left_nav");
                if (isCloseNav) {
                    footer.style.left = '0px';
                    leftNav.style.width = '0px';
                } else {
                    footer.style.left = '200px';
                    leftNav.style.width = '200px';
                }
            }
        }
    }
</script>

<style lang="scss">
    html,
    body,
    #app,
    .home,
    .el-container {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    .home {
        overflow: hidden; /*设置该属性可以隐藏滑动条*/
    }

    // 头部和底部
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 40px;
    }

    // 左边导航
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        width: 100%;
    }

    // 主体部分
    .el-main {
        background-color: antiquewhite;
        width: 100%;
        color: #333;
        height: 99%;
    }

</style>


