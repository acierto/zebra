import gulp from 'gulp';
import {spawn} from 'child_process';

export const runCypress = (cb) => {

    const child = spawn('npm', ['run', 'cypress:run']);
    child.stdout.setEncoding('utf8');

    child.stdout.on('data', console.log);
    child.stderr.on('data', console.log);

    child.on('close', cb);
};

gulp.task('cypress', (cb) => runCypress(cb));
