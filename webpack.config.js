//Webpack이란?
//=모듈 번들링, html 파일에 들어가는 자바스크립트 파일들을 하나의 자바스크립트 파일로 만들어주는 방식


'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loaders: 'babel-loader' //최신 ES6버전을 구 버전인 ES5로 변환해준다. (인터넷 익스플로러11 지원)
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            context: './public',
            from: '*.*'
        }])
    ],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }

}