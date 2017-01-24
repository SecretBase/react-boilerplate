var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&minimize&importLoaders=1!postcss-loader!sass-loader'
        }),
        exclude: /(node_modules|globalStyle)/
      },
      // This is loader for the global that user defined so only work in globalStyle folder
      {
        test: /\.scss$/,
        enforce: 'post',
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?minimize?sourceMap!postcss-loader!sass-loader'
        }),
        include: /(node_modules|globalStyle)/
      },
      // Global style from node_modules and globalStyle folder
      {
        test: /\.css$/,
        enforce: 'post',
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?minimize?sourceMap!postcss-loader'
        }),
        include: /(node_modules|globalStyle)/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),
    new ExtractTextPlugin('styles-[contenthash].css'),
    // This is necessary to emit hot updates (currently CSS only):
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new BundleAnalyzerPlugin()
  ]
}
