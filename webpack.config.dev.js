var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '/build'),
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'eslint-loader'
        ],
        enforce: 'pre',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]-[hash:base64:5]',
              sourceMap: true
            }
          },
          {loader: 'postcss-loader'},
          {
            loader: 'sass-loader'
          }
        ],
        exclude: /(node_modules|globalStyle)/
      },
      // This is loader for the global that user defined so only work in globalStyle folder
      {
        test: /\.scss$/,
        enforce: 'post',
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {loader: 'postcss-loader'},
          {loader: 'sass-loader'}
        ],
        include: /(node_modules|globalStyle)/
      },
      // Global style from node_modules and globalStyle folder
      {
        test: /\.css$/,
        enforce: 'post',
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {loader: 'postcss-loader'}
        ],
        include: /(node_modules|globalStyle)/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]
}
