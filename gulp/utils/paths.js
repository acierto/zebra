import path from 'path';

const projectDir = path.resolve(__dirname, '..', '..');
const clientDir = `${projectDir}/client`;
const serverDir = `${projectDir}/server`;

export default {
    clientDir,
    serverDir,
    distDir: 'src/client/src/public',
    webDir: 'src/client/src'
};
