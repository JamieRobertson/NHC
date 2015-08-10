// run this file with gulp watch in cli

'use strict';

var gulp = require('gulp'),
	babel = require('gulp-babel');

gulp.task('default', function () {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/app.js', ['default'])
});