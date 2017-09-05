var gulp             = require('gulp');
var sass             = require('gulp-sass');
var autoprefixer     = require('gulp-autoprefixer');
var sourcemaps       = require('gulp-sourcemaps');
var browserSync      = require('browser-sync');
var uglify           = require('gulp-uglify');
var cssnano          = require('gulp-cssnano');
var imagemin         = require('gulp-imagemin');
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
var browserify       = require('browserify');
var babelify         = require('babelify');
var source           = require('vinyl-source-stream');
var buffer           = require('vinyl-buffer');

// Config
var paths = {
  css:      './app/assets/styles/',
  html:     './app/templates/',
  js:       './app/assets/scripts/',
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
    .pipe(gulp.dest(paths.dist + 'styles')) // Outputs it in the css folder
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
  return browserify({entries: paths.js + 'main.js', debug: true})
      .transform("babelify", { presets: ["es2015"], sourceMaps: true })
      .bundle()
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(paths.dist + 'scripts'))
      .pipe(browserSync.reload({ // Reloading with Browser Sync
      stream: true
    }));
});

// Watchers
// TODO: Fix image watch - and transfer on 'gulp'?
gulp.task('watch', function() {
  gulp.watch(paths.css + '/**/*.scss', ['sass']);
  gulp.watch(paths.icons + '**/*', ['icons'], 'nunjucks');
  gulp.watch(paths.images + '**/*', ['images']);
  gulp.watch(paths.html + '**/*', ['nunjucks']);
  gulp.watch(paths.js + '**/*.js', ['javascript']);
});

// Optimization Tasks
// ------------------

// Optimizing Images
// TODO: Use tinyPNG?
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
  return gulp.src(paths.dist + 'styles/styles.css')
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist + 'css'));
});

// Minify JS
gulp.task('jsbuild', function () {
  return gulp.src(paths.dist + 'scripts/main.js')
    // .pipe(plumber())
    .pipe(uglify())
    // .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest(paths.dist + 'scripts'));
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
