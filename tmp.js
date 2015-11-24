(function() {
  'use strict';
  var gulp       = require('gulp'),
      nodemon    = require('gulp-nodemon'),
      sass       = require('gulp-ruby-sass'),
      livereload = require('gulp-livereload');

  gulp.task('serve', function() {
    nodemon({
      script : 'server/server.js',
      ext    : 'html js'
    })
    .on('restart', function() {
      console.log('restarted!');
    });
  });

  gulp.task('sass', function() {
    gulp
      .src('./app/less/**/*.less')
      .pipe(sass())
      .pipe(gulp.dest('./public/stylesheets'))
      .pipe(livereload())
      .on('error', function(err) {
        console.log(err.message);
      });
  });

  gulp.task('watch', function() {
    gulp.watch('./app/less/**/*.less', ['build-less']);
  });

  gulp.task('default', ['build-less', 'serve', 'watch'], function() {
    console.log('Gulp power... ');
  });
})();



(function() {
  'use strict';
  var gulp       = require('gulp'),
      ...

  gulp.task('serve', function() {
    ...
  });

  gulp.task('build-less', function() {
    gulp
      ...
      .pipe(livereload())
      ...
  });

  gulp.task('watch', function() {
    gulp.watch('./app/less/**/*.less', ['build-less']);
  });

  gulp.task('default', ['build-less', 'serve', 'watch']);
})();
