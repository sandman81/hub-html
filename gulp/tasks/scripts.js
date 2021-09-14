module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/owl.carousel/dist/owl.carousel.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/owl.carousel/dist/owl.carousel.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglify())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['!./dev/static/js/libs.min.js', './dev/static/js/*.js'])
            // .pipe($.gp.babel({
            //     presets: ['@babel/env']
            // }))
            .pipe($.gp.concat('main.js'))
            // .pipe($.gp.uglify())
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
