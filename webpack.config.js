const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        new cssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new htmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [cssExtractPlugin.loader, 'css-loader']

        },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [cssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpg?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[path][name].[ext]',
                        },
                      },
                    // {
                    //     loader: 'img-optimize-loader',
                    //     options: {
                    //         name: '[path][name].[ext]',
                    //         compress: {
                    //             mode: 'high',
                    //             webp: false,
                    //             gifsicle: true,
                    //             disableOnDevelopment: false,
                    //         },
                    //     },
                    // },
                ],
            },
        ]
    }
}