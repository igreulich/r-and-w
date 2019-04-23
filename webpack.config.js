const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    'webpack-app': './app/javascripts/a.webpack'
  },
  output: {
    path: path.resolve(__dirname, 'app', 'public'),
    filename: '[name].js',
    publicPath: "/public/",
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  target: 'web',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          name: 'webpack-vendor',
          enforce: true,
        }
      }
    },
  }
};
