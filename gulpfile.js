/**
 * gulp file for minify files
 */

var gulp       = require('gulp');
var usemin     = require('gulp-usemin');
var uglify     = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss  = require('gulp-minify-css');
var rev        = require('gulp-rev');
var copy2      = require('gulp-copy2');

var path = {
   source: {
      root: 'static/',
      imgs: 'static/images/',
      homepage: 'static/homepage/',
      subpage: 'static/homepage/'
   },
   optimized: {
      root: 'optimized/',
      imgs: 'optimized/images/',
      homepage: 'optimized/homepage/',
      subpage: 'optimized/subpage/'
   }
};

// Minify css, js, html
// main html: homepage.html, subpage.html,
// homepage_mobile.html, subpage_mobile.html
gulp.task('usemin-main-page', function() {

   return gulp.src(path.source.root + '*.html')
      .pipe(usemin({
         css: [minifyCss({
            advanced: true,
            keepSpecialComments: 0
         }), 'concat'],
         // html: [minifyHtml({
         //    empty: true
         // })],
         js: [uglify(), rev()],
      }))
      .pipe(gulp.dest(path.optimized.root));
});

// Minify css, js, html
// main html: homepage.html, subpage.html,
// homepage_mobile.html, subpage_mobile.html
gulp.task('usemin-homepage', function() {

   return gulp.src(path.source.homepage + '*.html')
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
      .pipe(gulp.dest(path.optimized.homepage));
});

// Copy images
gulp.task('copy-images', function () {
    var paths = [
         {src: path.source.imgs + '*.*', dest: path.optimized.imgs},
         // homepage
         {src: path.source.homepage + '*.jpg', dest: path.optimized.homepage},
         {src: path.source.homepage + '*.png', dest: path.optimized.homepage},
         {src: path.source.homepage + '*.jpeg', dest: path.optimized.homepage},
         {src: path.source.homepage + '*.ashx', dest: path.optimized.homepage},

         // subpage
         {src: path.source.subpage + '*.jpg', dest: path.optimized.subpage},
         {src: path.source.subpage + '*.png', dest: path.optimized.subpage},
         {src: path.source.subpage + '*.jpeg', dest: path.optimized.subpage},
         {src: path.source.subpage + '*.ashx', dest: path.optimized.subpage}
         /*
         // homepage
         {src: 'static/homepage/*.jpg', dest: 'optimized/homepage/'},
         {src: 'static/homepage/*.png', dest: 'optimized/homepage/'},
         {src: 'static/homepage/*.jpeg', dest: 'optimized/homepage/'},
         {src: 'static/homepage/*.ashx', dest: 'optimized/homepage/'}
         */
    ];
    return copy2(paths);
});

// Copy fonts
gulp.task('copy-fonts', function() {
   var paths = [
       {src: 'static/fonts/*.*', dest: 'optimized/fonts/'}
   ];
   return copy2(paths);
});

gulp.task('usemin', ['usemin-main-page', 'usemin-homepage']);

// register default task
// gulp.task('default', ['usemin-main-page', 'copy-images', 'copy-fonts']);
gulp.task('default', ['usemin-main-page']); // ['usemin-main-page', 'copy-images', 'copy-fonts']);
