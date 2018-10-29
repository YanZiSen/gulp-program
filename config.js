// extractor the config from the tasks can improve the reuse and better for share for diffrent project
// browsersync http://www.browsersync.cn/docs/gulp/
// w3c gulp http://www.w3cplus.com/blog/tags/528.html
const src = 'app';
const build = 'build';
const development = 'build/development'
const production = 'build/production'
const srcAssets = 'app/_assets';
const developmentAssets = 'build/assets'
const productionAssets = 'build/production/assets'

module.exports = {
	browsersync: {
		development: {
			server: {
				baseDir: [development,build,src]
			},
			port: 9999,
			files: [
				developmentAssets + '/css/*.css',
				developmentAssets + '/js/*.js',
				developmentAssets + '/images/**',
				developmentAssets + '/fonts/*'
			]
		}
	}
}