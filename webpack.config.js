const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.css'],
  },
  devServer: {
    port: 9000,
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new JsDocPlugin({
      conf: 'jsdoc.config.json',
      cwd: '.',
      preserveTmpFile: false,
    }),
  ],
};
