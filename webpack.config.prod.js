var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    path: './build',
    // Add /* filename */ comments to generated require()s in the output.
    filename: '[name]-[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel'
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?modules&minimize&importLoaders=1!postcss!sass'
        ),
        exclude: /(node_modules|globalStyle)/
      }
    ],
    postLoaders: [
      // This is loader for the global that user defined so only work in globalStyle folder
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', '!css?minimize?sourceMap!postcss!sass'),
        include: /(node_modules|globalStyle)/
      },
      // Global style from node_modules and globalStyle folder
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?minimize!postcss'),
        include: /(node_modules|globalStyle)/
      }
    ]
  },
  postcss: function () {
    return [
      autoprefixer({
        browsers: [
          '>1%'
        ]
      })
    ]
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: '[name]-[chunkhash].js',
    //   minChunks: Infinity
    // }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    }),
    new ExtractTextPlugin('styles-[contenthash].css'),
    // This is necessary to emit hot updates (currently CSS only):
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    })
  ]
}
