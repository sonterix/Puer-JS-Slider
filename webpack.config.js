const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({ template: './index.html' })],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: '3005'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@styles': path.resolve(__dirname, 'src/styles/')
    }
  }
}
