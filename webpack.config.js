const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "development",
  entry: {
    taskpanel: "./src/taskpanel.tsx"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "taskpanel.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: "./src/taskpanel.template.html",
      filename: "taskpanel.html",
      inject: "body"
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "./public/index.html", to: "index.html", noErrorOnMissing: true },
        { from: "./public/styles.css", to: "styles.css", noErrorOnMissing: true },
        { from: "./public/assets/icon1.png", to: "assets/icon1.png", noErrorOnMissing: true },
        { from: "./public/assets/icon2.png", to: "assets/icon2.png", noErrorOnMissing: true }
      ]
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ]
};