let path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(_dirname, 'dist'),
    filename: 'index_budle.js'
  },
   modules: {
     rules: [
       { test: /\.(js)$/, use: 'babel-loader' },
       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
     ]
   },
}