const parsedEnvObj = require("dotenv").config("./.env").parsed
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const { DefinePlugin } = require("webpack")


module.exports = {
  entry: path.join(__dirname, "src", "index"),
  devtool: "eval",
  devServer: {
    open: true,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    liveReload: false,
    client: {
      overlay: false,
    }
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(css|scss|sass)/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(woff|ttf|ttf2)$/,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new DefinePlugin({
      "process": JSON.stringify({ env: parsedEnvObj })
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public/static/images", to: "static/images" },
      ],
    })
  ]
}
