var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps')
var minifyCss = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')

var files = {
	sass: {
		main: './assets/stylesheets/style.scss',
		all: './assets/stylesheets/**/*.scss',
	}
};

function logError(err) {
  console.log(err.toString());
	this.emit('end');
}

gulp.task('sass', function() {
	gulp.src(files.sass.main)
		.pipe(sourcemaps.init())
			.pipe(sass()).on('error', logError)
			.pipe(autoprefixer({cascade: false}))
			.pipe(minifyCss({advanced: false}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.'))
		.on('error', function() { console.log("ERROR"); });
});

gulp.task('watch', function() {
	gulp.watch(files.sass.all, ['sass']);
});

gulp.task('default', ['watch', 'sass']);
