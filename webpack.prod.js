const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //build시 폴더를 초기화
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',

  devtool: 'cheap-module-source-map', //배포용 소스맵은 용량이 가장 작은 옵션으로 선택

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },

  plugins: [new CleanWebpackPlugin()]
})
