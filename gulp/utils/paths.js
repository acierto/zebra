import path from 'path';

const projectDir = path.resolve(__dirname, '..', '..');
const clientDir = `${projectDir}/src/client`;
const serverDir = `${projectDir}/src/server`;

export default {
    clientDir,
    serverDir,
    distDir: 'src/public',
    webDir: 'src/client/src'
};
