var PROJECT_ROOT = __dirname;
var DIST_ROOT = __dirname + '/dist'

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');

gulp.task('scripts', function() {
    return gulp.src(PROJECT_ROOT + '/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(annotate())
        .pipe(gulp.dest(DIST_ROOT));
});

gulp.task('markup', function() {
    gulp.src(PROJECT_ROOT + '/js/**/*.html')
        .pipe(templateCache({
            standalone: true
        }))
        .pipe(gulp.dest(PROJECT_ROOT + '/js'));
});

gulp.task('default', ['scripts', 'markup'], function () {

    gulp.watch(PROJECT_ROOT + '/js/**/*.js', ['scripts']);
    gulp.watch(PROJECT_ROOT + '/js/**/*.html', ['markup']);
    gulp.watch(PROJECT_ROOT + '/index.html', ['markup']);

});