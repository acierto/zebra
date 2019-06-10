import * as R from 'ramda';
import webpack from 'webpack';
import {proxyPort} from '../../utils/connection';
import {
    entryConfig, exposeLoadersConfig, rulesConfig, pluginsConfig, outputConfig, optimizationConfig
} from './webpack.config.common';

export default {
    devServer: {
        contentBase: '/',
        hot: false,
        port: proxyPort,
        publicPath: ''
    },
    entry: R.evolve({
        main: R.concat([
            `webpack-dev-server/client?http://localhost:${proxyPort}`,
            'react-dom/test-utils',
            'bean'
        ])
    }, entryConfig),
    mode: 'production',
    module: {rules: [...exposeLoadersConfig, ...rulesConfig]},
    optimization: {
        minimize: true,
        ...optimizationConfig
    },
    output: outputConfig,
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        new webpack.NoEmitOnErrorsPlugin(),
        ...pluginsConfig
    ]
};
