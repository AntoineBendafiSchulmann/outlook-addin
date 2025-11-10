const path = require("path");

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
    filename: "taskpanel.js",
    path: path.resolve(__dirname, "public")
  }
};