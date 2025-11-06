const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    taskpanel: "./src/taskpanel.ts"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: "taskpanel.js",
    path: path.resolve(__dirname, "public")
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "manifest.xml", to: "manifest.xml" }
      ]
    })
  ]
};