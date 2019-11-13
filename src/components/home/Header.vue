<template>
    <div class="header-wrapper">
        <div class="header-name">
            <span>后台管理系统</span>
        </div>
        <div class="header-menu" @click="onClickClose()">
            <img style="height: 30px;width: 25px;padding: 5px" src="../../assets/ic_header_menu.png"/>
        </div>
        <div style="float: right;">
            <el-dropdown style="float: left;margin-right: 20px;color: white;" trigger="click">
                <span class="el-dropdown-link">
                    评论<i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix">
                        评论
                        <el-badge class="mark" :value="12"/>
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix">
                        回复
                        <el-badge class="mark" :value="3"/>
                    </el-dropdown-item>
                </el-dropdown-menu>

            </el-dropdown>

            <div class="block">
                <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </div>

            <div class="block">
                <span @click="btnLogout()">退出</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            circleUrl: String
        },
        data() {
            return {
                isCloseNav: false
            }
        },
        methods: {
            onClickClose() {
                let _this = this;
                _this.isCloseNav = !_this.isCloseNav;
                _this.$emit("getCloseNav", _this.isCloseNav);
            },
            btnLogout() {
                // 设置用户名为空
                this.$store.commit('LOGIN_IN', '');
                this.$router.replace({
                    path: '/login'
                })
            }
        }
    }
</script>


<style lang="scss">
    .header-wrapper {
        height: 40px;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0;
        padding: 0;
        width: 100%;
    }

    .header-name {
        color: white;
        width: 130px;
        padding-left: 20px;
        float: left;
    }

    .header-menu {
        width: 40px;
        margin-left: 32px;
        float: left;
    }

    .block {
        line-height: 30px;
        float: left;
        margin-right: 20px;
        margin-top: 5px;
    }

    .block span {
        color: white;
        text-decoration: none;
        font-size: 14px;
    }

</style>
