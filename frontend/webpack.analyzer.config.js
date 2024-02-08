const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const Dotenv = require("dotenv-webpack")
const path = require("path")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = (env, args) => {
  const config = {
    entry: "./src/index",
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name].js",
    },
    devServer: {
      port: 3000,
      historyApiFallback: true,
      open: true,
      hot: true,
      liveReload: false,
      client: {
        overlay: false
      }
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin()
      ],
      splitChunks: {
        cacheGroups: {
          axios: {
            test: /[\\/]node_modules[\\/]axios[\\/]lib/,
            chunks: "initial",
            name: "axios"
          },
          reactdomcjs: {
            test: /[\\/]node_modules[\\/]react-dom[\\/]/,
            chunks: "initial",
            name: "react-dom-cjs"
          },
          router: {
            test: /[\\/]node_modules[\\/]@remix-run[\\/]/,
            chunks: "initial",
            name: "remix"
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(css|scss|sass)/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new Dotenv({
        path: path.join(__dirname, ".env"),
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "public/static/images", to: "static/images" },
        ],
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        openAnalyzer: true
      })
    ]
  }
  if (args.mode !== "production") {
    config.devtool = "eval"
  }
  return config;
}