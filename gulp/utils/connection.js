function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

const argv = require('yargs').argv;

export const itestPort = argv.itestPort ? argv.itestPort : 4519;

export const proxyPort = argv.itestPort ? randomInt(49152, 65535) : 6516;

export const isWin = /^win/.test(process.platform);
