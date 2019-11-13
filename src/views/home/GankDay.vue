<template>
    <div class="gank-day-container" v-loading="loading">
        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane
                    v-for="item in gankDayTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name">
                <div v-bind:key="entity._id" v-for="entity in item.content">
                    <div class="day-entity-content" @click="onClickItemGankDay(entity)">
                        <div>{{entity.desc}}</div>
                        <el-image v-for="imgItem in entity.images"
                                  style="width: 120px;height: 220px;margin-right: 15px;margin-top: 10px;"
                                  :key="imgItem"
                                  :src="imgItem" lazy></el-image>
                        <div style="margin-top: 10px">
                            <span style="color: white;background: red;font-size: 10px;padding:2px 5px;border-radius: 5px;text-align: center"
                                  v-show="entity.used">New</span>
                            <span style="text-align: center;margin-left: 10px;color: white;background: darkcyan;font-size: 10px;padding:3px 8px;border-radius: 5px;">
                                {{entity.who}}
                            </span>
                            <span style="text-align: center;margin-left: 10px;color: white;background: gray;font-size: 10px;padding:2px 5px;border-radius: 5px;">
                                {{entity.createdAt}}
                            </span>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: "GankDay",
        mounted() {
            // 默认加载数据
            this.dayLoading();
        },
        data() {
            return {
                gankDayTabs: [],
                activeName: '1',
                loading: true
            }
        },
        methods: {
            onClickItemGankDay(dayEntity) {
                console.log("url:" + dayEntity.url);
                window.open(dayEntity.url, "_blank");
            },
            dayLoading() {
                let _this = this;
                _this.$axios.get('http://gank.io/api/today').then(response => {
                    for (let i = 0; i < response.data.category.length; i++) {
                        let name = response.data.category[i];
                        switch (name) {
                            case "Android":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.Android
                                });
                                break;

                            case "App":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.App
                                });
                                break;
                            case "iOS":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.iOS
                                });
                                break;
                            case "休息视频":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.休息视频
                                });
                                break;
                            case "前端":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.前端
                                });
                                break;
                            case "拓展资源":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.拓展资源
                                });
                                break;
                            case "福利":
                                _this.gankDayTabs.push({
                                    title: name,
                                    name: "" + (i + 1),
                                    content: response.data.results.福利
                                });
                                break;
                        }
                    }
                    _this.loading = false;
                    console.log(JSON.stringify(_this.gankDayTabs))
                }).catch(error => {
                    _this.loading = false;
                    _this.$message({
                        showClose: true,
                        message: '数据请求失败！',
                        type: 'error'
                    });
                    console.log("======:" + JSON.stringify(error))
                })
            },
        }
    }
</script>

<style scoped lang="scss">
    .gank-day-container {
        width: 100%;
        height: 100%;
        .day-entity-content {
            box-shadow: 0 0 8px 8px #dddddd;
            margin: 15px 15px 30px;
            border-radius: 3px;
            padding: 10px;
            border: 1px solid white;
        }

        .day-entity-content:hover {
            border: 1px solid rebeccapurple;
        }
    }

</style>
