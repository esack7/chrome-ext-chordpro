const production = process.env.NODE_ENV === 'production';
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

let plugins = [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()];

if (production) {
  console.log(process.env.NODE_ENV);
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx'
  ],
  devtool: production ? undefined : 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: production ? 'popup.js' : 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
