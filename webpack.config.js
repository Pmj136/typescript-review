/**
 * @author     ：PengMingJiu
 * @date       ：Created in 2022/2/10 14:50
 * @description：
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: {
        index: './main.ts'
    },
    devServer: {
        client: {
            logging: 'error'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body',
            hash: false
        }),
    ],
}
