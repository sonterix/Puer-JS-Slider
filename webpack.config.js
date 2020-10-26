const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: {
    nickSlider: {
      import: './NickSlider.js',
      filename: '[name][ext]'
    },
    demo: {
      import: './demo/script.js',
      filename: 'demo/[name][ext]'
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [new HTMLWebpackPlugin({ template: './demo/index.html' })],
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
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@demo': path.resolve(__dirname, 'src/demo/')
    }
  }
}
