/* eslint-disable */
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: {
    app: __dirname + '/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,   exclude: /node_modules/,  loader: 'babel'
      }
    ]
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js',
    publicPath: 'http://localhost:8000/build'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    colors: true,
    contentBase: __dirname,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8000,
    progress: true,
    stats: {
      cached: false
    }
  }
};