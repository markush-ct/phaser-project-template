const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/game.js'),
    output: { 
        filename: 'game.bundle.min.js'
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: { assets: path.join(__dirname, '../src/assets') }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader' 
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml|wav|ogg|mp3)$/i,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            CANVAS_RENDERER: JSON.stringify(true),
            WEBGL_RENDERER: JSON.stringify(true)
        }),
        new CleanWebpackPlugin( { root: path.resolve(__dirname, '../') } ),
        new HtmlWebpackPlugin( {
            template: './index.html',
            minify: false
        })
    ]
}