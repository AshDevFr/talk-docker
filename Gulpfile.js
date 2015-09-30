/**
 * Created by AshDevFr on 12/05/15.
 */

(function() {
  'use strict';
  var gulp    = require('gulp'),
      nodemon = require('gulp-nodemon'),
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

  gulp.task('watch', function() {
    gulp.watch('app/**/*', function() {
      livereload();
    });
  });

  gulp.task('default', ['serve', 'watch'], function() {
    console.log('Gulp power... ');
  });
})();
