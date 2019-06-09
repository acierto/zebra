import R from 'ramda';
import webpack from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import {proxyPort} from '../../utils/connection';
import {
    entryConfig, exposeLoadersConfig, rulesConfig, pluginsConfig, outputConfig, optimizationConfig
} from './webpack.config.common';

export default {
    devServer: {
        contentBase: '/public/zebraDist/libs/js/',
        hot: true,
        port: proxyPort,
        publicPath: ''
    },
    devtool: 'inline-source-map',
    entry: R.evolve({
        main: R.concat([
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${proxyPort}`,
            'webpack/hot/only-dev-server',
            'react-dom/test-utils',
            'bean'
        ])
    }, entryConfig),
    mode: 'development',
    module: {rules: [...exposeLoadersConfig, ...rulesConfig]},
    optimization: optimizationConfig,
    output: outputConfig,
    plugins: [
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        ...pluginsConfig
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
