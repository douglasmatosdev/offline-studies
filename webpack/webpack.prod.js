const common = require("./webpack.common.js")
const { merge } = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const workboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")



module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: {
          removeAttributesQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin(),
    new workboxWebpackPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, '/src/sw/sw.js'),
      swDest: 'dist/sw.js',
      exclude: [
        /\.map$/,
        /manifest$/,
        /\.htaccess$/,
        /service-worker\.js$/,
        /sw-loader\.js$/,
        /sw\.js$/,
      ]
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/', to: './public/assets/' },
        { from: './pwa.webmanifest', to: './public/' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})