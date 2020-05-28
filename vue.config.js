const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath: './',
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
  // configureWebpack: config =>{
  //   if (process.env.NODE_ENV === 'production') {
  //     const plugins = []
  //     plugins.push(
  //       new CompressionPlugin({
  //         filename: '[path].gz[query]',
  //         algorithm: 'gzip',
  //         test: /\.css$|\.ttf$|\.html$|\.svg$|\.json$|\.js$/,
  //         threshold: 0, // 只有大小大于该值的资源会被处理
  //         minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
  //         deleteOriginalAssets: true// 删除原文件
  //       }),
  //     )
  //     config.plugins = [
  //       ...config.plugins,
  //       ...plugins
  //     ]
  //   }
  // },
}