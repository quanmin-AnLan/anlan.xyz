const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path")
module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config
			.plugin('html')
			.tap(args => {
				args[0].title = '安澜网'
				return args
			})
  },
  devServer: {
    proxy: {
      '/api':{
        target: 'http://www.python-spider.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/yyxApi':{
        target: 'http://match.yuanrenxue.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/yyxApi': ''
        }
      },
    }
  },
  configureWebpack: config =>{
    const plugins = []
    plugins.push(
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(html|js|json|ttf|css|jpeg|jpg|png)$/,
        threshold: 0,
        minRatio: 1,
        deleteOriginalAssets: true,
      }),
    )
    config.plugins = [
      ...config.plugins,
      ...plugins
    ]
  },
}