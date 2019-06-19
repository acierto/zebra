import gulp from 'gulp';
import './cypress';
import './nest-server';

gulp.task('e2e', gulp.series('nest-server', 'dev-server', 'cypress'));
