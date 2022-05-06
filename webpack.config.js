const path = require('path')
const nodeExternals = require('webpack-node-externals')
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  target: 'node',
  node:{__dirname: false, __filename: false},
  externals: [nodeExternals()],
  mode: process.env.NODE_ENV,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}