var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')
var minifyCss = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')

var files = {
	sass: './assets/stylesheets/style.scss'
};

gulp.task('sass', function() {
	gulp.src(files.sass)
		.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(autoprefixer({cascade: false}))
			.pipe(minifyCss({advanced: false}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
	gulp.watch(files.sass, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
