/*
 * @Author: zhang_py601 1598071583@qq.com
 * @Date: 2024-04-26 09:06:55
 * @LastEditors: zhang_py601 1598071583@qq.com
 * @LastEditTime: 2024-04-26 14:12:30
 * @FilePath: \demo\webpack.dev.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')

const baseConfig = require('./webpack.base')
const { HotModuleReplacementPlugin } = require('webpack')
const Merge = require('webpack-merge')

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    index: 'index.html',
    hot: true,
    publicPath: '/',
    overlay: true,
    open: true,
    liveReload: true,
    contentBase: [path.join(__dirname, './src'), path.join(__dirname, './public')],
    watchContentBase: true,
    // compress: true, // 启用 gzip 压缩
    port: 9001
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}

module.exports = Merge(baseConfig, devConfig)
