const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    modal: "./src/modal.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true,
    }),
  ],
  devtool: "source-map",
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    inline: true,
    open: true,
    port: 4000,
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       // test: /\.js(?.*)?$/i,
  //       test: /\.js(?.*)?$/,
  //       terserOptions: {
  //         mangle: true,
  //       },
  //     }),
  //   ],
  // },
  mode: "production",
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    inline: true,
    open: true,
  },
};
