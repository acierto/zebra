import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import paths from '../../utils/paths';

export const exposeLoadersConfig = [
    {
        test: require.resolve('bean'),
        use: [{
            loader: 'expose-loader',
            options: 'bean'
        }]
    }];

export const rulesConfig = [
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
    },
    {
        test: /\.(jpe?g|png|gif|svg|ico)\??.*$/i,
        use: [
            'file-loader?hash=sha512&digest=hex&name=images/[name]-[hash].[ext]',
            {
                loader: 'image-webpack-loader?bypassOnDebug',
                options: {
                    gifsicle: {interlaced: false},
                    optipng: {optimizationLevel: 7}
                }
            }
        ]
    },
    {loader: 'html-loader', test: /\.html$/},
    {
        test: /\.less$/,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader?sourceMap',
            'less-loader?sourceMap'
        ]
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
            'postcss-loader'
        ]
    }
];

export const pluginsConfig = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        hash: true,
        template: `./${paths.webDir}/templates/index.html`
    }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/)
];

export const optimizationConfig = {
    splitChunks: {
        cacheGroups: {
            commons: {
                chunks: 'all',
                name: 'vendor',
                test: /[\\/]node_modules[\\/]/
            },
            default: false
        }
    }
};

export const entryConfig = {
    main: [`./${paths.webDir}/index.tsx`]
};

export const outputConfig = {
    filename: '[name]-[hash].js',
    path: '/',
    publicPath: ''
};
