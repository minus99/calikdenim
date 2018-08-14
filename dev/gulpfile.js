// for development code run 'gulp'
// for production code run 'gulp --type prod'
gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
sourcemaps = require('gulp-sourcemaps'),
gutil = require('gulp-util'),
concat = require('gulp-concat'),
cache = require('gulp-cache'),
uglify = require('gulp-uglify');

var folder = {};

// src file path
folder['src'] = './src';
folder['sass_src'] = folder['src'] + '/sass';
folder['js_src'] = folder['src'] + '/js';

// dist file path
folder['dist'] = '../dist';
folder['assets'] = folder['dist'] + '/assets';
folder['css'] = folder['assets'] + '/css';
folder['js'] = folder['assets'] + '/js';


// packages
var VendorArray = {
	'jsVendor': [
		// bvalidator
		// 'node_modules/sweetalert2/dist/sweetalert2.min.js'
		//'node_modules/bvalidator/dist/jquery.bvalidator.min.js',
		//'node_modules/bvalidator/dist/themes/presenters/default.min.js',
		//'node_modules/bvalidator/dist/themes/gray/gray.js',
		// jquery-typeahead
		//'node_modules/jquery-typeahead/dist/jquery.typeahead.min.js'

		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/select2/dist/js/select2.full.min.js',
		'node_modules/swiper/dist/js/swiper.min.js',
		'node_modules/nouislider/distribute/nouislider.min.js'
	]
};

// css tasks
gulp.task('build-sass', function () {
	return gulp.src(folder['sass_src'] + '/**/*.scss')
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.init())
		.pipe(gutil.env.type === 'prod' ? sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError) : sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 version'))
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.write())
		.pipe(gulp.dest(folder['css']));
});

// js tasks
gulp.task('build-js', function () {
	return gulp.src(folder['js_src'] + '/**/*.js')
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.init())
		.pipe(concat('main.js'))
		.pipe(gutil.env.type === 'prod' ? uglify() : gutil.noop())
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.write())
		.pipe(gulp.dest(folder['js']));
});

gulp.task('jsvendor', function () {
	return gulp.src(VendorArray['jsVendor'])
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.init())
		.pipe(concat('vendor.js'))
		.pipe(gutil.env.type === 'prod' ? uglify() : gutil.noop())
		.pipe(gutil.env.type === 'prod' ? gutil.noop() : sourcemaps.write())
		.pipe(gulp.dest(folder['js']))
});


// default task
gulp.task('default', ['build-sass', 'build-js', 'jsvendor'], function () {
	gulp.watch(folder['sass_src'] + '/**/*.scss', ['build-sass']);
	gulp.watch(folder['js_src'] + '/**/*.js', ['build-js']);
});