const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'antd': 'antd'
  },
  entry: {
    main: './src/main/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    alias: {
      'single-spa': 'single-spa/src/single-spa.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
        // include: /single-spa|react-router-dom|history/
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              // [
              //   'import',
              //   {
              //     libraryName: 'antd',
              //     libraryDirectory: 'es',
              //     style: true
              //   }
              // ]
            ]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'single-spa demo',
      template: './src/index.html'
    }),
    new CopyPlugin([
      { from: 'lib', to: 'lib' }
    ]),
    new webpack.DefinePlugin({
      '__DEV__': true
    })
  ]
}
