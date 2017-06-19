var gulp             = require('gulp');
var sass             = require('gulp-sass');
var autoprefixer     = require('gulp-autoprefixer');
var sourcemaps       = require('gulp-sourcemaps');
var browserSync      = require('browser-sync');
var uglify           = require('gulp-uglify');
var cssnano          = require('gulp-cssnano');
var imagemin         = require('gulp-imagemin');
var deporder         = require('gulp-deporder');
var concat           = require('gulp-concat');
var cache            = require('gulp-cache');
var del              = require('del');
var plumber          = require('gulp-plumber');
var runSequence      = require('run-sequence');
var nunjucksRender   = require('gulp-nunjucks-render');
var svgstore         = require('gulp-svgstore');
var svgmin           = require('gulp-svgmin');
var cheerio          = require('gulp-cheerio');
var babel            = require('gulp-babel');
var gutil            = require('gulp-util');
var prettify         = require('gulp-html-prettify');

// Config
var paths = {
  css:      './app/assets/css/',
  html:     './app/templates/',
  js:       './app/assets/js/',
  images:   './app/assets/images/',
  fonts:    './app/assets/fonts/',
  icons:    './app/assets/icons/',
  dist:     './dist/'
};

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src(paths.css + '**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(plumber({ errorHandler: function(err) {
      gutil.beep();
    }}))
    .pipe(sourcemaps.init({identityMap: true})) // sourcemaps.init must go first
    .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
      .pipe(sass())
      .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dist + 'css')) // Outputs it in the css folder
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src(paths.html + 'pages/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: [paths.html + 'components']
    }))
  // output files in app folder
  .pipe(plumber({ errorHandler: function(err) {
    gutil.beep();
  }}))
  .pipe(gulp.dest('./dist'))
  .pipe(browserSync.reload({ // Reloading with Browser Sync
    stream: true
  }));
});

gulp.task('icons', function () {
  return gulp.src(paths.icons + '*')

    .pipe(svgmin())
    .pipe(svgstore())
    .pipe(cheerio({
      run: function ($, file) {
        $('svg').addClass('hide');
        $('[fill]').removeAttr('fill'); // removes colours (fill) in SVG
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(plumber({ errorHandler: function(err) {
      gutil.beep();
    }}))
    .pipe(gulp.dest(paths.html + 'components/partials'));
});

gulp.task('javascript', function () {
  return gulp.src(paths.js + '/src/**/*.js')
    // Usage: Add this at top of JS file to specify depedency '// requires: libs/jquery.min.js'
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(plumber())
    // Force babel to transpile to es2015
    .pipe(babel({
        presets: [['es2015', {'modules': false}]]
    }))
    .pipe(gulp.dest(paths.dist + 'js'))
    .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});


// Watchers
gulp.task('watch', function() {
  gulp.watch(paths.css + '/**/*.scss', ['sass']);
  gulp.watch(paths.icons + '*', ['icons'], 'nunjucks');
  gulp.watch(paths.images + '*', ['images']);
  gulp.watch(paths.html + '**/*', ['nunjucks']);
  gulp.watch(paths.js + '/src/*.js', ['javascript']);
});

// Optimization Tasks
// ------------------

// Optimizing Images
gulp.task('images', function() {
  return gulp.src(paths.images + '**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest(paths.dist + 'images'));
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src(paths.fonts + '**/*')
    .pipe(gulp.dest(paths.dist + 'fonts'));
});

// Minify CSS
gulp.task('cssbuild', function () {
  // return gulp.src(paths.css + '/styles.css')
  return gulp.src(paths.dist + 'css/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist + 'css'));
});

// Minify JS
gulp.task('jsbuild', function () {
  return gulp.src(paths.dist + 'js/main.js')
    // .pipe(plumber())
    .pipe(uglify())
    // .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest(paths.dist + 'js'));
});

// Cleaning
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
});

gulp.task('clean:dist', function() {
  return del.sync([paths.dist + '**/*', !paths.dist + 'images', !paths.dist + 'images/**/*']);
});

gulp.task('prettify', function() {
  gulp.src(paths.dist + '*.html')
    .pipe(prettify({indent_char: ' ', indent_size: 2, collapseWhitespace: true}))
    .pipe(gulp.dest(paths.dist));
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'icons', 'nunjucks', 'javascript'], 'watch', 'browserSync',
    callback
  );
});

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    'sass',
    'javascript',
    'nunjucks',
    ['images', 'icons'],
    'cssbuild',
    'jsbuild',
    'prettify',
    callback
  );
});
