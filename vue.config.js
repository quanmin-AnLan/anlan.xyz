module.exports = {
  publicPath: './',
  outputDir: 'dist',
  chainWebpack: config => {
    config
			.plugin('html')
			.tap(args => {
				args[0].title = '安澜网'
				return args
			})
  }
}