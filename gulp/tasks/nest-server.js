import axios from 'axios';
import gulp from 'gulp';
import paths from '../utils/paths';
import {npmInstall, runNpmCommand} from '../utils/process-util';

const maxAttempt = 10;
const timeout = 5000;
const url = 'http://localhost:3333/ping';

const pingTillConnected = (cb) => {
    let attempt = 1;

    setTimeout(() => {
        axios.get(url)
            .then(() => {
                console.error('Nest server is up and running!');
                cb();
            })
            .catch(() => {
                console.error(`Trying to connect. Attempt #${attempt} ...`);
                attempt++;
                if (attempt < maxAttempt) {
                    pingTillConnected(cb);
                }
            });
    }, timeout);
};

gulp.task('nest-server-install', (cb) => {
    npmInstall(paths.serverDir, cb);
});

gulp.task('nest-server-start', (cb) => {
    runNpmCommand('start', paths.serverDir);
    cb();
});
gulp.task('nest-server-wait', pingTillConnected);

gulp.task('nest-server-install-and-start', gulp.series('nest-server-install', 'nest-server-start'));

gulp.task('nest-server', gulp.parallel('nest-server-install-and-start', 'nest-server-wait'));

gulp.task('nest-server-check', (cb) => {
    axios.get(url)
        .then(cb)
        .catch((err) => {
            console.error(err);
            cb();
        });
});
