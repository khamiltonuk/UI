const path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.resolve('./source/client.js')],
    output: {
      path: path.resolve("./"),
      filename: 'index.js',
    },
    devServer:{
        inline: true,
        contentBase:"./public",
        port:3000
    },
    module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
    }
};
