const { merge } = require('webpack-merge');
const development = require('./development');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = merge(development, {
    mode: 'production',
    devtool: false,
    performance: {
        maxEntrypointSize: 50000000,
        maxAssetSize: 50000000
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    format: {
                        comments: false 
                    }
                }
            })
        ]
    }
});