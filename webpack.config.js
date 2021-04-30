module.exports = {
  entry: './index.js',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
      { test: /\.js$/,  exclude: /node_modules/, loader: 'babel-loader'}
    ]
  }
}