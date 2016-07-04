//Potion Gulp Setup file
var autoprefixer 	= require('gulp-autoprefixer'),
		cache         = require('gulp-cache'),
		concat        = require('gulp-concat'),
		connect 			= require('gulp-connect'),
		gulp 					= require('gulp')
		livereload 		= require('gulp-livereload'),
		haml 					= require('gulp-ruby-haml'),
		imagemin      = require('gulp-imagemin'),
		minifycss 		= require('gulp-minify-css'),
		notify        = require('gulp-notify'),
		rename 				= require('gulp-rename'),
		sass 					= require('gulp-ruby-sass'),
		uglify        = require('gulp-uglify');

// Compile Haml into HTML
gulp.task('haml', function() {
  gulp.src('src/views/**/*.haml')
    .pipe(haml().on('error', function(e) { console.log(e.message); }))
    .pipe(gulp.dest('./'))
		.pipe(notify({ message: 'HAML task complete' }))
		.pipe(livereload());
});

gulp.task('scss', function() {
	return sass('src/scss/application.scss', { sourcemap: false })
		.on('error', function (err) { console.log("ERROR: " + err.message); })
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('css'))
		.pipe(notify({ message: 'SCSS task complete' }))
		.pipe(livereload());
});

gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(concat('application.js'))
		.pipe(gulp.dest('js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('js'))
		.pipe(notify({ message: 'JS task complete' }))
		.pipe(livereload());
});

gulp.task('images', function() {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
		.pipe(gulp.dest('img'))
		.pipe(notify({ message: 'IMAGES task complete' }))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('src/views/**/*.haml', ['haml']).on('change', livereload.changed);
  gulp.watch('src/scss/**/*.scss', ['scss']).on('change', livereload.changed);
  gulp.watch('src/js/**/*.js', ['js']).on('change', livereload.changed);
  gulp.watch('src/img/**/*', ['images']).on('change', livereload.changed);
	livereload.listen();
});

// Kick off
gulp.task('default', ['watch'], function() {
	gulp.start('haml', 'scss', 'js', 'images');
});
