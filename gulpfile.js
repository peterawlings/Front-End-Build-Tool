var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var deporder = require('gulp-deporder');
var concat = require('gulp-concat');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var nunjucksRender = require('gulp-nunjucks-render');

var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var cheerio = require('gulp-cheerio');


// TODO
// - SVG Workflow
// - Babel / ES6?
// - Clear out JS files to use as base

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init({identityMap: true})) // sourcemaps.init must go first
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(sass())
      .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

// TODO - put generated HTML files into a folder
gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/templates/pages/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates/components']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('icons', function () {
  return gulp.src('./src/assets/icons/*')
    .pipe(svgmin())
    .pipe(svgstore({ fileName: 'icons.svg', inlineSvg: true}))
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
        $('[fill]').removeAttr('fill');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(gulp.dest('./_includes/'));
});

// Watchers
gulp.task('watch', function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/templates/**/*.njk', ['nunjucks']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', ['javascript']);
})

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
// gulp.task('useref', function() {
//
//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     // .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'));
// });



gulp.task('javascript', function () {
  return gulp.src('app/js/src/**/*.js')
    // Usage: Add this at top of JS file to specify depedency '// requires: libs/jquery.min.js'
    .pipe(deporder())
    // .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/js'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});


// Optimizing Images
gulp.task('images', function() {
  return gulp.src('app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('app/assets/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))
});


// gulp.task('cssnano', function () {
//   return gulp.src('app/css/**/*.css')
//     .pipe(cssnano())
//     .pipe(gulp.dest('dist/styles/main.min.css'));
// });

gulp.task('cssbuild', function () {
  return gulp.src('app/css/styles.css')
    .pipe(cssnano())
    // .pipe(concat(''))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jsbuild', function () {
  return gulp.src('app/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// Cleaning
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    ['images', 'fonts', 'cssbuild', 'jsbuild'],
    callback
  )
})
