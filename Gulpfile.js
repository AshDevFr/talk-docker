/**
 * Created by AshDevFr on 12/05/15.
 */

(function() {
  'use strict';
  var gulp    = require('gulp'),
      jscs    = require('gulp-jscs'),
      jshint  = require('gulp-jshint'),
      jsFiles = ['**/*.js', '!dist/**/*', '!**/*.min.js', '!node_modules/**/*.js', '!receiver/public/vendor/**/*', '!sender/public/vendor/**/*'];

  gulp.task('jscs', function() {
    gulp.src(jsFiles)
      .pipe(jscs());
  });

  gulp.task('lint', function() {
    gulp.src(jsFiles)
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
  });

  gulp.task('default', ['jscs', 'lint'], function() {
    console.log('Gulp power... ')
  });
})();
