import R from 'ramda';
import {spawn} from 'child_process';

export const runProcess = (command, args, cwd, cb) => {
    const child = spawn(command, args, {cwd});
    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');

    child.stdout.on('data', console.log);
    child.stderr.on('data', console.log);

    child.on('close', cb);
};

export const runNpmCommand = (command, cwd, cb = R.F) => runProcess('npm', ['run', command], cwd, cb);

export const npmInstall = (cwd, cb) => runProcess('npm', ['install'], cwd, cb);
