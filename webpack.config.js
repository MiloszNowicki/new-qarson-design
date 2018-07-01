'use strict'

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextCssPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const srcPath = path.join(__dirname, '/../src');

module.exports = {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8000,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            filename: 'index.html'
        }),

    ],
    module: {
          rules: [
              {
                  test: /\.(s*)css$/,
                  use: [
                      {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                              publicPath: '../'
                          }
                      },
                      'css-loader',
                      'sass-loader',
                      {
                          loader:'postcss-loader',
                          options: {
                              syntax: 'postcss-scss'
                          }
                      }
                  ],
              },
              {
                  test: /\.html$/,
                  use: [
                      {
                          loader: "html-loader",
                          options: {minimize: true}
                      }
                  ]
              },
              {
                  test: /\.(png|jpg|gif)$/,
                  loader: 'url-loader?limit=8192&name=images/[name].[ext]',
                  options: {
                      fallback: 'file-loader',
                  }

              },
              {
                  test: /\.(woff|woff2|ttf)$/,
                  loader: 'url-loader?limit=8192&name=fonts/[name].[ext]'
              }
          ]
      }
};