const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: path.resolve(__dirname, 'public'),
    compress: true,
    hot: false,
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      src: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
