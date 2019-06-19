import gulp from 'gulp';
import paths from '../utils/paths';
import {runNpmCommand} from '../utils/process-util';

gulp.task('nest-server', (cb) => runNpmCommand('start', paths.serverDir, cb));
