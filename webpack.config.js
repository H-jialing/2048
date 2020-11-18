const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development', // 指定开发者打包模式
  entry : './src/main.js', // 入口文件
  output : { // 输出文件
    filename : 'index.js', // 输出文件名
    path :  __dirname + '/public' // 输出文件路径
  },
  module : {
    rules: [
      { /* 将js或者jsx文件转码成es5 */
        test: /\.jsx?$/, // 正则惰性匹配后缀名为js或者jsx的文件
        exclude: /node_modules/, // 排除这个文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader'
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              }
            }
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              // implementation: 'dart-sass'
              implementation: require('dart-sass')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer") /*自动添加前缀*/
                  // 'autoprefixer' /*自动添加前缀*/
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html', // 打包后的文件名，默认是index.html
      template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
    }),
    new VueLoaderPlugin()
  ],
  devServer: { // node本地服务器
    host: '127.0.0.1',
    port: 8010
  }
}