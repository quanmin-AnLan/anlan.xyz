const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
  publicPath: './',
  outputDir: 'dist',
  indexPath: 'index.html',
	filenameHashing: false,
  chainWebpack: config => {
    config
			.plugin('html')
			.tap(args => {
				args[0].title = '安澜网'
				return args
			})
  },
  // configureWebpack: {
  //   plugins:[
  //     new CompressionPlugin({
  //       filename: '[path].gz[query]',
  //       algorithm: 'gzip',
  //       test: /\.js$|\.html$|\.json$|\.css/,
  //       threshold: 0, // 只有大小大于该值的资源会被处理
  //       minRatio:0.8, // 只有压缩率小于这个值的资源才会被处理
  //       deleteOriginalAssets: false // 删除原文件
  //     })
  //   ],
  // },
}