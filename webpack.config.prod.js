const { merge } = require('webpack-merge');
const commonConfig = require('webpack.config.common');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
});
