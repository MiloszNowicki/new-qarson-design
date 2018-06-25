'use strict'

const webpack = require('webpack');
const path =require('path');

const srcPath = path.join(__dirname, '/../src');

module.exports = {
      module: {
          rules: [
              {
                  test: /\.(s*)css$/,
                  use: [
                      'style-loader',
                      {
                          loader: 'css-loader',
                          options:
                              { parser: 'postcss-scss',
                                  importLoaders: 1
                              }
                      },
                  ]
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
}