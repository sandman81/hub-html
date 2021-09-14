module.exports = function() {
    $.gulp.task('svg', () => {
        return $.gulp.src('./dev/static/img/svg/*.svg')
            .pipe($.gp.svgSprite({
                mode: {
                    symbol: {
                        example: true,
                        sprite: 'sprite.svg',
                        render: {
                            styl: {
                                dest: 'icons.styl',
                                template: './dev/static/img/svg/cssTemplates/default.styl'
                            }
                        }
                    }
                }
            }))
            .pipe($.gulp.dest('./dev/static/img/svg/generated'));
    });
    $.gulp.task('spriteStylusCopy', () => {
        return $.gulp.src('./dev/static/img/svg/generated/symbol/icons.styl')
            .pipe($.gulp.dest('./dev/styl/utils/'));
    });
    $.gulp.task('spriteCopy', () => {
        return $.gulp.src('./dev/static/img/svg/generated/symbol/sprite.svg')
            .pipe($.gulp.dest('./build/static/img/svg/'));
    });
};