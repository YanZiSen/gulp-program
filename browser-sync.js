const gulp = require('gulp')
const browsersync = require('browser-sync')
// const config = require('../../config')
gulp.task('browsersync',['build'],function(){
	browsersync(config);
})