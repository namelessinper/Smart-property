const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //是否在浏览器中显示代码检查的错误
  devServer: {
    // port:8081, //设置端口号，如果默认8080不需要设置，这里设置8081主要是为了不要和后台tomcat的8080接口冲突
    proxy: {
      //设置代理
      "/api": {
        // /api 匹配项，匹配拦截；
        target: "http://localhost:3000", //被请求的地址，需要被代理的地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/api": "", //重写配置，被代理的接口会多一个‘/api’的前缀，而原本的接口是没有的，所以需要通过此项来将接口的前缀‘/api’转换为‘’
        },
      },
    },
  },
});
