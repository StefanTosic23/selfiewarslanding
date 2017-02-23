// Include gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var server = require('gulp-server-livereload');

// Paths
var paths = {

	css: {
		dest: 'css'
	},

	scss: {
		src: 'sass/**/*',
		main: 'sass/main.scss'
	}

};

// Compile SCSS to CSS
gulp.task('sass', function() {
	gulp.src(paths.scss.main)
	.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error',console.log.bind(console))
		.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(paths.css.dest));
});


gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch(paths.scss.src, ['sass']);
});

// Default Task
gulp.task('default', ['watch']);