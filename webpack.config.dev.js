var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    // Add /* filename */ comments to generated require()s in the output.
    pathinfo: true,
    filename: './build/static/js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '']
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        include: path.resolve(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:5]&sourceMap!postcss!sass',
        exclude: /(node_modules|globalStyle)/
      }
    ],
    postLoaders: [
      // This is loader for the global that user defined so only work in globalStyle folder
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap!postcss!sass',
        include: /(node_modules|globalStyle)/
      },
      // Global style from node_modules and globalStyle folder
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap',
        include: /(node_modules|globalStyle)/
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    // This is necessary to emit hot updates (currently CSS only):
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]
}
