const env = require("dotenv").config().parsed
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { DefinePlugin } = require("webpack")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

module.exports = (...args) => {
  console.log(args)
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.[contenthash].js",
      path: path.join(__dirname, "dist")
    },
    devServer: {
      port: 3000,
      liveReload: false,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    devtool: "eval",
    optimization: {
      minimize: true,
      minimizer: ["...", new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all"
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          use: "babel-loader"
        },
        {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
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
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/static/images", to: "static/images" },
        ],
      }),
      new MiniCssExtractPlugin(),
    ]
  }
}