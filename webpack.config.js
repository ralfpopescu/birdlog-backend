const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

options: {
  presets: ['react']
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  target: 'node',
  node: {
  __dirname: false,
  __filename: false,
  },
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          babelrc: false,
          presets: [["es2015", { modules: false }], "react", "stage-3"],
      }
    }
    ]
  }
};
