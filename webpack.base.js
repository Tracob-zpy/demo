const chalk = require('chalk')
const Glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { HashedModuleIdsPlugin, ProvidePlugin, DefinePlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const devMode = process.env.NODE_ENV !== 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
function genEntry() {
  const entry = {}
  Glob.sync('./src/pages/*/*.js').forEach(path => {
    const portion = path.split('/')
    const name = portion[3]
    entry[name] = [path]
  })
  return entry
}

function genHtml() {
  const htmlArr = []
  Glob.sync('./src/pages/*/*.html').forEach(path => {
    const portion = path.split('/')
    const name = portion[3]
    htmlArr.push(new HtmlWebpackPlugin({
      template: path,
      filename: name + '.html',
      chunks: [name, 'runtime', 'vendors', 'common'],
      inject: 'body',
      hash: true,
      minify: false
    }))
  })
  return htmlArr
}

module.exports = {
  entry: genEntry(),
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/(node_modules|bower_components)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            options: devMode ? undefined : {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 5 * 1024,
            name: '[name].[hash:8].[ext]',
            outputPath: 'images'
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: {
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src'
                },
                {
                  tag: 'link',
                  attribute: 'href',
                  type: 'src'
                }
              ]
            },
            minimize: devMode ? false : {
              collapseWhitespace: false,
              conservativeCollapse: true,
              keepClosingSlash: true,
              minifyCSS: true,
              minifyJS: true,
              removeAttributeQuotes: false,
              removeComments: true,
              removeScriptTypeAttributes: true,
              removeStyleTypeAttributes: true,
              useShortDoctype: true
            }
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
      'layui': resolve('/public/layui.all.js'),
      'swiper': resolve('/public/swiper-bundle.min.js')
    }
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
      // Swiper: 'swiper/swiper-bundle.min.js',
      // Layui: 'layui-src/dist/layui.all.js'
    }),
    new HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{
        from: './public',
        to: ''
      }]
    }),
    new ProgressBarPlugin({
      format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
    }),
    new DefinePlugin({
      JINGLE_BASE_API: JSON.stringify('http://39.108.167.240:8088'),
      IOS_APP_QR_URL: JSON.stringify('http://dl.zyzygame.com/ios_qr_code.png'),
      ANDROID_APP_QR_URL: JSON.stringify('http://dl.zyzygame.com/andorid_qr_code.png'),
      IOS_APP_DL_URL: JSON.stringify('http://www.pgyer.com/D1Bz'),
      ANDROID_APP_DL_URL: JSON.stringify('http://www.pgyer.com/Eg9I'),
      AVATAR_SM_CDN_URL: JSON.stringify('http://img.zyzygame.com/icon/small/'),
      IMAGE_CDN_URL: JSON.stringify('http://test.img.zyzygame.com/'),
      WECHAT_APP_ID: JSON.stringify('xxxx'),
      JPUSH_KEY: JSON.stringify('xxxx'),
      DEV_MODE: devMode
    })
  ].concat(genHtml()),
  optimization: {
    runtimeChunk: 'single',
    namedChunks: devMode,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false
          },
          compress: {
            drop_debugger: false,
            drop_console: true
          }
        }
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      minSize: 10,
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendors',
          minSize: 0,
          minChunks: 1,
          chunks: 'initial',
          priority: 10
        },
        common: {
          minChunks: 2,
          name: 'common',
          chunks: 'all',
          priority: 5
        }
      }
    }
  }
}
