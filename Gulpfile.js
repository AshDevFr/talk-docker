/**
 * Created by AshDevFr on 12/05/15.
 */

(function() {
  'use strict';
  var gulp    = require('gulp'),
      nodemon = require('gulp-nodemon');

  gulp.task('serve', function() {
    nodemon({
      script : 'server/server.js',
      ext    : 'html js'
    })
      .on('restart', function() {
        console.log('restarted!');
      });
  });

  gulp.task('default', ['serve'], function() {
    console.log('Gulp power... ');
  });
})();
