var gulp = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var cleanCSS = require('gulp-clean-css')

AUTOPREFIXER_OPTIONS = {
  browsers: ['last 2 versions', '> 5%'],
  cascade: false
}

gulp.task('css', function() {
  gulp.src(['styles/style.scss'])
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer(AUTOPREFIXER_OPTIONS))
      .pipe(cleanCSS())
    .pipe(sourcemaps.write('.', {
      sourceMappingURLPrefix: '/wp-content/themes/ninteen-thirty-four'
    }))
    .pipe(gulp.dest('.'))
})

gulp.task('default', ['css'])

gulp.task('watch', ['css'], function() {
  gulp.watch(['styles/**/*.scss'], ['css'])
})
