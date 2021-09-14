module.exports = function() {

    $.gulp.task('img:dev', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,ico,svg}')
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('./dev/static/img/**/*.{png,jpg,ico,svg}')
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest('./build/static/img/'));
    });

    $.gulp.task('svg:copy', () => {
        return $.gulp.src('./dev/static/img/general/*.svg')
            .pipe($.gulp.dest('./build/static/img/general/'));
    });

};
