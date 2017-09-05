const path = require('path');

module.exports = {
    entry: path.resolve('./public/index.html'),
    devServer:{
        //inline: true,
        contentBase:"./public",
        port:3000
    },
    module: {
        loaders: [{
          test: /\.html$/,
          loader: "html-loader"
        }]
    }
};
