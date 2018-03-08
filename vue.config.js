module.exports = {
  // 覆盖webpack的配置写到configureWebpack里面
  // 原因是：这个对象会被webpack-merge合并入最终的webpack配置
  configureWebpack: {
    output: {
      path: '/Users/GeekBean/Documents/box/MySelf/vueTemplate/www',
      filename: 'chunks/[name].[hash:16].js',
      publicPath: '/'
    }
  },
  // 覆盖htmlWebPackPlugind配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 9999,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {
      // app is an express instance
    }
  }
}
