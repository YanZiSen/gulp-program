const gulp = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const pug = require('gulp-pug'); // jade 模板解释引擎
const rename = require('gulp-rename');
gulp.task('css', () => {
	// browserslist https://github.com/browserslist/browserslist#best-practices
	var processors = [autoprefixer({browsers: ['>0.01%']})]
	return gulp.src('./client/css/*.styl')
	.pipe(stylus())
	.pipe(postcss(processors))
	.pipe(gulp.dest(path.join(__dirname, '/dist/css')))
	.pipe(browserSync.stream())
})
gulp.task('js', () => {
	gulp.src('./client/js/xhr.js')
  	// .pipe(rename())
		.pipe(babel({presets: ['@babel/env']})) // this is the problem the js output one filenpm
		.pipe(gulp.dest( path.join(__dirname,'/dist/js')))
		// .pipe(browserSync.stream())
})

gulp.task('template', () => {
	console.log(path.join(__dirname , '/dist/views'))
	return gulp.src('./client/template/*.pug')
		.pipe(pug())
		.pipe(gulp.dest( './dist/views'))
})

gulp.task('build', ['css','js','template'])

gulp.task('server', ['build'], () => {
	var server = browserSync.create()
	server.init({
		ui: { // ui界面的端口号
			port: 8080
		},
		server: {
			baseDir: '/'
		}
	})
	gulp.watch("./client/js/*.js",['js'])
	gulp.watch("./client/css/*.styl",['css'])
	gulp.watch("./client/template/*.pug",['template']).on("change",server.reload)
})