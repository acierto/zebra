import axios from 'axios';
import gulp from 'gulp';
import paths from '../utils/paths';
import {runNpmCommand} from '../utils/process-util';
import {serverPort} from '../utils/connection';

const maxAttempt = 5;
const timeout = 5000;
const url = `http://localhost:${serverPort}/ping`;

let attempt = 1;

const pingTillConnected = (cb) => {
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
                } else {
                    cb();
                }
            });
    }, timeout);
};

gulp.task('nest-server-start', (cb) => {
    runNpmCommand('start', paths.serverDir);
    cb();
});
gulp.task('nest-server-wait', pingTillConnected);

gulp.task('nest-server', gulp.parallel('nest-server-start', 'nest-server-wait'));

gulp.task('nest-server-check', (cb) => {
    axios.get(url)
        .then(cb)
        .catch((err) => {
            console.error(err);
            cb();
        });
});
