// const BASE_URL = "http://47.105.71.81:3306/";

module.exports = {
   // publicPath: BASE_URL,  // 设置baseUrl
    lintOnSave: false,   // 关闭eslint
    devServer: {
        overlay: {// 关闭eslint
            warnings: false,
            errors: false
        },
        /* host: "192.168.17.120",
         port: 8080, // 端口号*/
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://47.105.71.81:3306', // 要访问的接口域名
                // target: 'https://www.wanandroid.com',
                // 网易 http://baobab.kaiyanapp.com/
                // 其他 http://47.105.71.81:3306
                changeOrigin: true, //是否跨域
                ws: true   // 是否启用 websockets
            }/*,
            '/foo': {
                target: 'https://www.wanandroid.com',
                changeOrigin: true
            }*/
        }
    }
};
