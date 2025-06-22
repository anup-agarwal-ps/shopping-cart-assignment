const env = require("dotenv").config().parsed
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")
const { DefinePlugin } = require("webpack")

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader"
      },
      ,
      {
        test: /\.(jp[e]g|png)$/,
        type: "asset"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      "process": JSON.stringify({ env })
    }),
  ]
}
