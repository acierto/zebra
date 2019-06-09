import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import plumber from 'gulp-plumber';
import identity from 'gulp-identity';
import paths from '../utils/paths';
import webpackDevConfig from './webpack/webpack.config.dev';
// import webpackTestConfig from './webpack/webpack.config.test';
import webpackProdConfig from './webpack/webpack.config.prod';

const createDist = ({config, plumb = false}) => gulp
    .src(`${paths.webDir}/**/*.js`)
    .pipe(plumb ? plumber() : identity())
    .pipe(webpackStream(config, webpack))
    .pipe(gulp.dest(paths.webDir));

gulp.task('webpack-development', () => createDist({config: webpackDevConfig, plumb: true}));
gulp.task('webpack-production', () => createDist({config: webpackProdConfig}));
// gulp.task('webpack-test', () => createDist({config: webpackTestConfig}));
