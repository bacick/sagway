const { resolve } = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js'
    },
    plugins: [
        // new cssExtractPlugin({
        //     filename: '[name].[contenthash].css'
        // }),
        new htmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        }),
        // new CleanWebpackPlugin(),
    ],
}