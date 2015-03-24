/**
 * gulp file for minify files
 */

'use strict';
var gulp       = require('gulp');
var usemin     = require('gulp-usemin');
var uglify     = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss  = require('gulp-minify-css');
var rev        = require('gulp-rev');

gulp.task('usemin', function() {

   var src = {
      root: 'static/',
      build: 'optimized/',
      imgSrc: 'static/images',
      imgBuild: 'optimized/images'
   }

   return gulp.src(src.root + '*.html')
      .pipe(usemin({
         css: [minifyCss({
            advanced: true,
            keepSpecialComments: 0
         }), 'concat'],
         html: [minifyHtml({
            empty: true
         })],
         js: [uglify(), rev()],
      }))
      .pipe(gulp.dest(src.build));
});

gulp.task('default', ['usemin']);
