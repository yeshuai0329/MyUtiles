// vue.config.js每次修改，都要重启项目

module.exports = {
  // 对本地服务进行配置
  devServer: {
    port: '8080',
    // 代理配置
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3000', // 是接口所在的服务器地址
        ws: true,
        changeOrigin: true
      }
    }
  }
}
