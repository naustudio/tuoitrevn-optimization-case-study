/**
 * gulp file for minify files
 */

var gulp       = require('gulp');
var usemin     = require('gulp-usemin');
var uglify     = require('gulp-uglify');
// var minifyHtml = require('gulp-minify-html');
var minifyCss  = require('gulp-minify-css');
var rev        = require('gulp-rev');
var copy2      = require('gulp-copy2');

var dir = {
   src: 'static/',
   optimized: 'optimized/'
};

var path = {
   htmls: {
      home: dir.src + 'home.html',
      subpage: dir.src + 'subpage.html',
      homeMobile: dir.src + 'home_mobile.html',
      subpageMobile: dir.src + 'subpage_mobile.html'
   },
   source: {
      root: dir.src,
      imgs: dir.src + 'images/',
      fonts: dir.src + 'fonts/',
      homepage: dir.src + 'homepage/',
      subpage: dir.src + 'subpage/'
   },
   optimized: {
      root: dir.optimized,
      imgs: dir.optimized + 'images/',
      fonts: dir.optimized + 'fonts/',
      homepage: dir.optimized + 'homepage/',
      subpage: dir.optimized + 'subpage/'
   }
};

/**
 * minify home.html
 */
gulp.task('minify-home', function() {
   return gulp.src(path.htmls.home)
      .pipe(usemin({
         css: [minifyCss({
            advanced: true,
            keepSpecialComments: 0
         }), 'concat'],
         commonJs: [uglify()],
         libJs: [uglify()],
         js: [uglify()]
      }))
      .pipe(gulp.dest(path.optimized.root))
});

/**
 * minify subpage.html
 */
gulp.task('minify-subpage', function() {
   return gulp.src(path.htmls.subpage)
      .pipe(usemin({
         css: [minifyCss({
            advanced: true,
            keepSpecialComments: 0
         }), 'concat'],
         commonJs: [uglify()],
         libJs: [uglify()],
         js: [uglify()]
      }))
      .pipe(gulp.dest(path.optimized.root))
});

gulp.task('minify-desktop', ['minify-home', 'minify-subpage']);

// Copy images
gulp.task('copy', function () {
    var paths = [
         // coopy images
         {src: path.source.imgs + '*.*', dest: path.optimized.imgs},
         {src: path.source.fonts + '*.*', dest: path.optimized.fonts},
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
    ];
    return copy2(paths);
});

// register default task
gulp.task('default', ['copy', 'minify-desktop']);

/**
 * test case
 *
gulp.task('test', function() {
   return gulp.src('testgulp/index.html')
      .pipe(usemin({
         // css: [minifyCss({
         //    advanced: true,
         //    keepSpecialComments: 0
         // }), 'concat', rev()],
         js: [uglify(), rev()],
      }))
      .pipe(gulp.dest('testgulp/optimized'));
});
*/