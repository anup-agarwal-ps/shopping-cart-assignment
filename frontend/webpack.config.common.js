const env = require("dotenv").config().parsed
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { DefinePlugin } = require("webpack")

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader"
      },
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
