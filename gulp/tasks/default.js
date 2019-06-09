import gulp from 'gulp';

gulp.task('build-development', gulp.series('webpack-development'));

gulp.task('build-production', gulp.series('webpack-production'));

gulp.task('default', gulp.parallel('dev-server'));
