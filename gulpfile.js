var gulp       = require('gulp');
var connect    = require('gulp-connect');
var beep       = require('beepbeep');
var gutil      = require('gulp-util');
var plumber    = require('gulp-plumber');
var uglify     = require('gulp-uglifyjs');
var sass       = require('gulp-sass');
var livereload = require('gulp-livereload');

var onError = function (err) {
	beep([0, 0, 0]);
	gutil.log(gutil.colors.green(err));
};

/**
* Task: `gulp webserver`
* spins up a webserver
*/
gulp.task('webserver', function() {
	connect.server({
		livereload: true
	});
});

/**
* Task: `gulp js`
* minifies and compiles main.js into app.js
*/
gulp.task('uglifyjs', function() {
	return gulp.src([
		'./bower_components/jquery/dist/jquery.min.js',
		'./js/main.js'
	])
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(uglify('app.js', {
		compress: false
	}))
	.pipe(gulp.dest('./js/'))
	.pipe(livereload());
});

/**
* Task: `gulp sass`
* minifies and compiles style.scss into style.css
*/
gulp.task('sass', function() {
	return gulp.src([
		'./sass/style.scss'
	])
	.pipe(plumber({
		errorHandler: onError
	}))
	.pipe(sass({
		style: 'compressed',
		cacheLocation: './cache/.sass-cache',
		includePaths : [
		'bower_components/bourbon/app/assets/stylesheets',
		'bower_components/neat/app/assets/stylesheets',
		],
	}))
	.pipe(gulp.dest('./css/'))
	.pipe(livereload());
});

/**
* Task: `gulp html`
* live reloads when html changes
*/
gulp.task('html', function() {
	return gulp.src([
		'./index.html'
	])
	.pipe(livereload());
});

// WATCH AND BUILD TASKS

// Primary task to watch other tasks
gulp.task('default', ['webserver'], function() {
	// LiveReload
	livereload.listen();

	// Watch JS
	gulp.watch('./js/main.js', ['uglifyjs']);

	// Watch Sass
	gulp.watch(['./sass/*.scss'], ['sass']);

	// Watch HTML and livereload
	gulp.watch('./index.html', ['html']);
});

// Manually build all
gulp.task('build', function() {
	gulp.start('uglifyjs', 'sass');
});
