import webpack from 'webpack';
import {
    entryConfig, rulesConfig, pluginsConfig, outputConfig, optimizationConfig
} from './webpack.config.common';

export default {
    entry: entryConfig,
    mode: 'production',
    module: {
        rules: [
            {
                include: /node_modules/,
                loaders: ['strip-sourcemap-loader'],
                test: /\.js$/
            },
            ...rulesConfig
        ]
    },
    optimization: {
        minimize: true,
        ...optimizationConfig
    },
    output: outputConfig,
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        ...pluginsConfig
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
};
