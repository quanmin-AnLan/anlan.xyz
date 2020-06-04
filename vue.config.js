const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  filenameHashing: false,
  productionSourceMap: false,
  crossorigin:undefined, // cors
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
      }
    }
  },
  configureWebpack: config =>{
    if (process.env.NODE_ENV === 'production') {
      const plugins = []
      plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|json|ttf|css|jpeg|jpg|png)$/,
          threshold: 0, 
          minRatio: 1, 
          deleteOriginalAssets: true,
        }),
      )
      config.plugins = [
        ...config.plugins,
        ...plugins
      ]
    }
  },
}