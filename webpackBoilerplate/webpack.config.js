/* uncomment the following block and the respective line within the plugins section for the webpack config to get this working
const WebpackShellPlugin = require('webpack-shell-plugin');
//Current build path represents where the file needs to go to
var MOVE_FILE_TO = 'Y:/marsjs/js/build/distribute';
var RECOMPILE_ON_THIS_FILE = MOVE_FILE_TO + '/bundle.js';
var GIT_COMMIT = 'git add -A && git commit -m "auto commit: ' + new Date().toLocaleString().replace(', ','@') + '";';
var shellCommand2 = 'mv ./dist/bundle.js ' + MOVE_FILE_TO + ';' + GIT_COMMIT;
var _onBuildEnd = shellCommand2;
*/

module.exports = {
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: './dist/bundle.js'
  },I
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'stage-0', 'react'],
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader'
        },
        {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
        }
    ]
  },
  /* The below plugin goes with the code at the top of the file that is commented out
  plugins: [
    // new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:['echo "Webpack End"']})
    new WebpackShellPlugin({onBuildStart:['echo "Webpack Start"'], onBuildEnd:[_onBuildEnd]})
  ]
  */
}
