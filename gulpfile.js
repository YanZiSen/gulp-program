const gulp = require('gulp');
const path = require('path');
const postcss = require('gulp-postcss');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel')
gulp.task('css', () => {
	// browserslist https://github.com/browserslist/browserslist#best-practices
	var processors = [autoprefixer({browsers: ['>0.01%']})]
	return gulp.src('./client/css/*.styl')
	.pipe(stylus())
	.pipe(postcss(processors))
	.pipe(gulp.dest(path.join(__dirname + '/dist/css')))
})
gulp.task('js', () => {
	gulp.src('./client/js/*.js')
		.pipe(babel({presets: ['@babel/env']}))
		.pipe(gulp.dest(path.join(__dirname + '/dist/js')))
})