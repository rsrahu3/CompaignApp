var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
    entry: "./src/index.jsx",
    output: {
        path:__dirname+ '/dist/',
        filename: "bundle.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }]
}
};