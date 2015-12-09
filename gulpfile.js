var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename    = require('gulp-rename');

gulp.task('styles', function() {
    gulp.src('scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['styles'] , function() {

    gulp.watch(['scss/**/*.scss'], ['styles']);

});
