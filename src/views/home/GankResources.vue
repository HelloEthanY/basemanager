<template>
    <div class="gank-resource-container" v-loading="loading" v-infinite-scroll="load"
         style="overflow:auto">
        <div v-bind:key="entity._id" v-for="entity in gankAndroidData">
            <div class="day-entity-content" @click="onClickItemGankAndroid(entity)">
                <div>{{entity.desc}}</div>
                <el-image v-for="imgItem in entity.images"
                          style="width: 120px;height: 220px;margin-right: 15px;margin-top: 10px;"
                          :key="imgItem"
                          :src="imgItem" lazy>

                </el-image>
                <el-divider></el-divider>
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
    </div>
</template>
<script>
    export default {
        name: "GankResources",
        mounted() {
            this.androidLoading();
        },
        data() {
            return {
                gankAndroidData: [],
                page: 0,
                loading: false
            }
        },
        methods: {
            onClickItemGankAndroid(dayEntity) {
                window.open(dayEntity.url, "_blank");
            },
            androidLoading() {
                let _this = this;
                _this.loading = true;
                ++_this.page;
                _this.$axios.get('http://gank.io/api/data/拓展资源/10/' + _this.page).then(response => {
                    if (response.data.results.length > 0) {
                        if (_this.page === 1) {
                            _this.gankAndroidData = response.data.results;
                        } else {
                            for (let i = 0; i < response.data.results.length; i++) {
                                _this.gankAndroidData.push(response.data.results[i]);
                            }
                        }
                    } else {
                        _this.$message({
                            showClose: false,
                            message: "加载完毕"
                        })
                    }
                    _this.loading = false;
                }).catch(error => {
                    _this.loading = false;
                    _this.$message({
                        showClose: false,
                        message: error,
                        type: 'error'
                    });
                })
            },
            load() {
                this.androidLoading();
            }
        }
    }
</script>

<style scoped lang="scss">
    .gank-resource-container {
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
