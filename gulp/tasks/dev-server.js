import gulp from 'gulp';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import Q from 'q';
import R from 'ramda';
import getLogger from 'loglevel-colored-level-prefix';
import bodyParser from 'body-parser';
import axios from 'axios';
import {proxyPort, itestPort} from '../utils/connection';
import hostname from '../utils/hostname';
import webpackDevConfig from './webpack/webpack.config.dev';

const log = getLogger({level: 'trace', prefix: 'Browser Log'});

const target = `http://${hostname}:${itestPort}`;

const proxy = [{
    changeOrigin: true,
    context: [
        '/deployit',
        '/api',
        '/icons',
        '/login',
        '/logout',
        '/compare-plugin',
        '/productregistration'
    ],
    target
}];

const startServer = (config) => {
    const serverStarted = Q.defer();

    const webpackInstance = webpack(config);
    webpackInstance.plugin('done', () => serverStarted.resolve());

    const server = new WebpackDevServer(webpackInstance, {
        disableHostCheck: true,
        hot: true,
        lazy: false,
        noInfo: false,
        proxy,
        publicPath: config.output.publicPath,
        quiet: false,
        stats: {colors: true}
    });
    server.app.use(bodyParser.urlencoded({extended: false}));
    server.app.use(bodyParser.json({limit: '50mb'}));
    server.app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Content-Type', 'application/json');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    server.app.post('/logger', (req, res) => {
        R.forEach((entry) => log[entry.level](...entry.arguments), req.body);
        res.status(200).send();
    });

    server.listen(proxyPort);
    return serverStarted.promise;
};

gulp.task('dev-server', () => startServer(webpackDevConfig));
