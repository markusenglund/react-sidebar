const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: path.join(__dirname, "example/src/index"),
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: "bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "example/src/index.html")
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: isProd ? "static" : "disabled"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "example/dist")
  }
};
