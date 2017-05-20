const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.module.js',
    vendor: './vendor.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          { loader: 'css-loader', options: { importLoaders: 1 } }, 
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader', 
          { loader: 'css-loader', options: { importLoaders: 1 } }, 
          'postcss-loader', 
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, './src')
  }
};
