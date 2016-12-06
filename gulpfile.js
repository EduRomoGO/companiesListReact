'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint');
	//stylish = require('jshint-stylish');

gulp.task('jshint', function() {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function () {
	gulp.watch(['./*.js'], ['jshint']);
});

gulp.task('default', ['watch']);