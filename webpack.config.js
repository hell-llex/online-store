// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
// const ESLintPlugin = require('eslint-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
  entry: ['@babel/polyfill', path.resolve(__dirname, './online-store/src/index.ts')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'index.js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  devServer: {
    open: true,
    port: 8080,
    // devtool: 'inline-source-map',
    // static: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    client: {
      overlay: false
    }
    // contentBase: path.join(__dirname, 'public')
    // open: true,
    // host: 'localhost'
  },
  plugins: [
    // new ESLintPlugin({
    //   files: './online-store/src/*.ts'
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './online-store/index.html'),
      favicon: path.resolve(__dirname, './online-store/assets/icons/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.(ts|tsx|js)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(?:png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(?:ico|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  } else {
    config.mode = 'development'
  }
  return config
}
