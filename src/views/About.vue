<template>
    <div class="about">
        <h1 style="margin:0 auto;">关于我们</h1>
        <el-button>点击加载数据</el-button>
    </div>
</template>
<script>
    export default {
        name: 'About',
        mounted() {

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


