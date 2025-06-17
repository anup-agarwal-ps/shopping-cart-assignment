const glob = require("glob")
const path = require("path")
const { default: merge } = require("webpack-merge")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const commonConfig = require("./webpack.config.common")

const config = (...args) => {
  const prodConfig = {
    entry: {
      index: "./src/index.tsx",
      react: "./src/reactLib.js",
      reactDOM: "./src/reactDOMLib.js"
    },
    optimization: {
      minimize: true,
      minimizer: ["...", new CssMinimizerPlugin()],
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        minChunks: 2,
        minSize: 20 * 1024,
        cacheGroups: {
          axios: {
            test: /[\\/]node_modules[\\/](axios)[\\/]/,
            name: "reactLibs",
            reuseExistingChunk: true,
            priority: 90,
            enforce: true
          },
          fortawesome_vendor: {
            test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
            name: "fortawesome",
            reuseExistingChunk: true,
            priority: 80,
            enforce: true
          },
          node_modules_vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            reuseExistingChunk: true,
            priority: 70,
            enforce: true
          },
        }
      },
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new PurgeCSSPlugin({
        paths: glob.sync(path.join(__dirname, "src/**/*.{js,jsx,ts,tsx,html}"))
      }),
      new HtmlWebpackPlugin({ template: "./index.html", chunks: ["runtime", "react", "reactDom", "index"], }),
      new CompressionPlugin({
        filename: "[base].gz",
        algorithm: "gzip",
        test: /\.(js|css|html|svg)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new CompressionPlugin({
        filename: "[base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: { level: 11 },
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]
  }
  if (args[1].env.analyze === "true")
    prodConfig.plugins.push(new BundleAnalyzerPlugin({
      analyzerPort: 3000,
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: 'report.html',
    }))

  return merge(commonConfig, prodConfig);
}

module.exports = config