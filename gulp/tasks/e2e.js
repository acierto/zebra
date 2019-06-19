import gulp from 'gulp';
import './cypress';

gulp.task('e2e', gulp.series('dev-server', 'cypress'));
