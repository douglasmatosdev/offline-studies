const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  }
})