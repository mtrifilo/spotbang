const webpack = require('webpack')
const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = function () {
  return {
    mode: 'development',
    context: __dirname,
    entry: {
      // vendor: ['react', 'react-dom', 'react-router-dom'],
      app: './client/components/BrowserEntry.js'
    },
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/public/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    node: {
      net: 'empty',
      dns: 'empty'
    },
    stats: 'minimal',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: [/node_modules/, /production/]
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader?sourceMap',
          exclude: [/node_modules/]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    devtool: 'cheap-module-source-map',
    performance: {
      hints: false,
      maxEntrypointSize: 400000,
      maxAssetSize: 300000
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'client/components/main.css'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Tether: 'tether'
      })
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   filename: 'vendor.js',
      //   minChunks: Infinity
      // }) // ,
      // new BundleAnalyzerPlugin()
    ]
  }
}
