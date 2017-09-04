const path = require('path');

module.exports = {
    entry: path.resolve('./public/index.html'),
    devServer:{
        contentBase:"./public",
        port:3000
    }
};
