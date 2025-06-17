const env = require("dotenv").config().parsed
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")
const { default: merge } = require("webpack-merge")
const commonConfig = require("./webpack.config.common")

const config = {
  entry: "./src/index.tsx",
  devServer: {
    port: 3000,
    liveReload: false,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader"
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new DefinePlugin({
      "process": JSON.stringify({ env })
    }),
  ]
}

module.exports = merge(commonConfig, config)