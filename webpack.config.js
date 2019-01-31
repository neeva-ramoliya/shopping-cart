const path = require("path");
const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./public",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react", "@babel/env"],

            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      }
    ]
  }
};
