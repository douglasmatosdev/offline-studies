const path = require("path")


module.exports = {
  entry: {
    index: "./src/index.js",
    sw: './src/sw/index.js'
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            outputPath: 'images',
          }
        }
      },
      {
        test: /\.(tsx|jsx|js)?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  }
}