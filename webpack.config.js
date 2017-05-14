const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/javascripts/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/pages/landing.html', to: "landing.html" },
      { from: './app/index.html', to: "index.html" },
      { from: './app/pages/buyer.html', to: "buyer.html" },
      { from: './app/pages/supplier.html', to: "supplier.html" },
      { from: './app/pages/financier.html', to: "financier.html" },
      { from: './app/pages/test.html', to: "test.html" },
      { from: './app/pages/login.html', to: "login.html" },
    ])
  ],
  module: {
    rules: [
      {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
      }
    ],
    loaders: [
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
