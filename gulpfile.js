// Gulp file for cryptico-es6

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('lib', () => {
  gulp
    .src([
      'src/jsbn.js'
      ,'src/random.js'
      ,'src/hash.js'
      ,'src/rsa.js'
      ,'src/aes.js'
      ,'src/api.js'
      ,'src/exports.js'
    ])
    .pipe(concat('cryptico.js'))
    .pipe(gulp.dest('lib/'))
    ;
});


gulp.task('default',['lib']);
