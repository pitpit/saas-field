const path = require('path');

module.exports = env => {

  return {
    mode: 'development',
    entry: 'main.js',
    context: path.resolve(__dirname, 'src'), // string (absolute path!)
    target: 'web',
    module: {
      rules: [
        {
          test: /\.scss|\.css$/,
          use: [
              "style-loader",
              'css-loader',
              "sass-loader"
          ],
          //this will resolve scss or css main file from "saas" or "style" fields in package.json
          resolve: {
            mainFields: [ 'sass', 'style']
          }
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/, loader: 'url-loader' }
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        'src'
      ],
      extensions: ['.js', '.scss']
    }
  };
};