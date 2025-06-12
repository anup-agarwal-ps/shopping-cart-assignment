const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const { default: merge } = require("webpack-merge")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const commonConfig = require("./webpack.config.common")

const config = (...args) => {
  const prodConfig = {
    optimization: {
      minimize: true,
      minimizer: ["...", new CssMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
        minSize: 20 * 1024,
        cacheGroups: {
          react_reactdom_vendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)/,
            reuseExistingChunk: true,
            priority: 100,
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
            priority: 10,
            enforce: true
          }
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