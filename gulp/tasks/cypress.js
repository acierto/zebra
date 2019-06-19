import gulp from 'gulp';
import paths from '../utils/paths';
import {runNpmCommand} from '../utils/process-util';

gulp.task('cypress', (cb) => runNpmCommand('cypress:run', paths.clientDir, () => {
    cb();
    process.exit(0);
}));
