var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var iife = require('gulp-iife')

AUTOPREFIXER_OPTIONS = {
  browsers: ['last 2 versions', '> 5%'],
  cascade: false
}
SOURCEMAPS_OPTIONS = {
  sourceMappingURLPrefix: '/wp-content/themes/ninteen-thirty-four'
}

gulp.task('css', function() {
  gulp.src(['styles/style.scss'])
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(AUTOPREFIXER_OPTIONS))
      .pipe(cleanCSS())
    .pipe(sourcemaps.write('.', SOURCEMAPS_OPTIONS))
    .pipe(gulp.dest('.'))
})

gulp.task('js', function() {
  gulp.src(['scripts/**/*.js'])
    .pipe(plumber())
    .pipe(sourcemaps.init())
      .pipe(iife())
      .pipe(uglify({
        compress: { drop_debugger: false }
      }))
      .pipe(concat('main.js'))
    .pipe(sourcemaps.write('.', SOURCEMAPS_OPTIONS))
    .pipe(gulp.dest('.'))
})

gulp.task('default', ['css', 'js'])

gulp.task('watch', ['css', 'js'], function() {
  gulp.watch(['styles/**/*.scss'], ['css'])
  gulp.watch(['scripts/**/*.js'], ['js'])
})
