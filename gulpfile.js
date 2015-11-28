var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['bower', 'js', 'css']);

gulp.task('js', function() {
    return gulp.src(['public/components/**/*.js'])
        .pipe(concat('bundle.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('bower', function() {
    return gulp.src(['public/bower_components/jquery/dist/jquery.min.js',
                     'public/bower_components/angular/angular.min.js',
                     'public/bower_components/angular-route/angular-route.min.js',
                     'public/bower_components/angular-animate/angular-animate.min.js',
                     'public/bower_components/AngularJS-Toaster/toaster.min.js',
                     'public/bower_components/angular-loading-bar/build/loading-bar.min.js'])
        .pipe(concat('bower.min.js'))
        .pipe(gulp.dest('public/dist'));
});

gulp.task('css', function(){
    return gulp.src(['public/bower_components/bootstrap/dist/css/bootstrap.min.css',
                     'public/bower_components/AngularJS-Toaster/toaster.css',
                     'public/bower_components/angular-loading-bar/src/loading-bar.css'])
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('public/dist'))
});
