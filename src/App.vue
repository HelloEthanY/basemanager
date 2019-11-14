<template>
    <div id="app" @mouseover="operatingWebsite()">
        <router-view/>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                currentTime: new Date().getTime()
            };
        },
        methods: {
            operatingWebsite() {
                let currentTime = this.currentTime;
                console.log(currentTime, "currentTime");
                let lastTime = new Date().getTime();
                console.log(lastTime, "lastTime");
                let timeOut = 10 * 60 * 1000; //设置时间 1分钟
                if (lastTime - currentTime > timeOut) {
                    // 未操作页面，跳转登录页面
                    this.currentTime = new Date().getTime();
                    this.$store.commit('LOGIN_IN', '');
                    //const fullPath = this.$route.fullPath;
                    // const query = this.$Base64.encode(fullPath);
                    this.$router.replace({
                        path: "/login"
                    });
                } else {
                    this.currentTime = new Date().getTime();
                }
                // const truthPathQuery = this.$route.query.type;
                // const truthPath = this.$Base64.decode(truthPathQuery); //点击登录的时候跳转这个地址
            }
        }
    }
</script>


<style lang="scss">

    html,
    body,
    #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
