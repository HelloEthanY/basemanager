import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            requiresAuth: true,
            name: 'home'
        },
        component: () => import('../views/home/Home.vue'),
        children: [
            {
                path: '/homePage',
                name: 'homePage',
                component: () => import('../views/home/HomePage.vue')
            },
            {
                path: '/gankDay',
                name: 'gankDay',
                component: () => import('../views/home/GankDay.vue')
            },
            {
                path: '/gankAndroid',
                name: 'gankAndroid',
                component: () => import('../views/home/GankAndroid.vue')
            },
            {
                path: '/gankHtml',
                name: 'gankHtml',
                component: () => import('../views/home/GankHtml.vue')
            },
            {
                path: '/gankResources',
                name: 'gankResources',
                component: () => import('../views/home/GankResources.vue')
            },
            {
                path: '/gankAll',
                name: 'gankAll',
                component: () => import('../views/home/GankAll.vue')
            },
            {
                path: '/about',
                name: 'about',
                component: () => import('../views/About.vue')
            },
            {
                path: '/echartsChart',
                name: 'echartsChart',
                component: () => import('../views/content/EchartsChart.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/Login.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
