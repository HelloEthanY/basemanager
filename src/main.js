import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/** VUE与APP交互 **/
import JsBridge from './config/JSbridge.js'
import echarts from 'echarts'
import axios from 'axios'
// 引入百度地图
import BaiduMap from 'vue-baidu-map';

Vue.use(BaiduMap, {
    ak: "yzob0doDU75trAA7KLOg3F0GDYuxC6Ca"
});
Vue.prototype.$bridge = JsBridge;
Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(ElementUI);
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (store.state.UserToken !== undefined && store.state.UserToken !== '') {
            next();
        } else {// 未登录
            next('/login');// 回到登录界面
        }
    } else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

