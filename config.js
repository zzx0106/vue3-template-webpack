config
config.resolve.extensions <ref *2> {
  parent: <ref *1> {
    parent: {
      parent: undefined,
      store: [Map],
      devServer: [Object],
      entryPoints: [Object],
      module: [Object],
      node: [Object],
      optimization: [Object],
      output: [Object],
      performance: [Object],
      plugins: [Object],
      resolve: [Circular *1],
      resolveLoader: [Object],
      shorthands: [Array],
      amd: [Function (anonymous)],
      bail: [Function (anonymous)],
      cache: [Function (anonymous)],
      context: [Function (anonymous)],
      devtool: [Function (anonymous)],
      externals: [Function (anonymous)],
      loader: [Function (anonymous)],
      mode: [Function (anonymous)],
      name: [Function (anonymous)],
      parallelism: [Function (anonymous)],
      profile: [Function (anonymous)],
      recordsInputPath: [Function (anonymous)],
      recordsPath: [Function (anonymous)],
      recordsOutputPath: [Function (anonymous)],
      stats: [Function (anonymous)],
      target: [Function (anonymous)],
      watch: [Function (anonymous)],
      watchOptions: [Function (anonymous)]
    },
    store: Map(0) {},
    alias: { parent: [Circular *1], store: [Map] },
    aliasFields: { parent: [Circular *1], store: Set(0) {} },
    descriptionFiles: { parent: [Circular *1], store: Set(0) {} },
    extensions: [Circular *2],
    mainFields: { parent: [Circular *1], store: Set(0) {} },
    mainFiles: { parent: [Circular *1], store: Set(0) {} },
    modules: { parent: [Circular *1], store: [Set] },
    plugins: { parent: [Circular *1], store: [Map] },
    shorthands: [
      'cachePredicate',
      'cacheWithContext',
      'concord',
      'enforceExtension',
      'enforceModuleExtension',
      'symlinks',
      'unsafeCache'
    ],
    cachePredicate: [Function (anonymous)],
    cacheWithContext: [Function (anonymous)],
    concord: [Function (anonymous)],
    enforceExtension: [Function (anonymous)],
    enforceModuleExtension: [Function (anonymous)],
    symlinks: [Function (anonymous)],
    unsafeCache: [Function (anonymous)]
  },
  store: Set(8) {
    '.tsx',
    '.ts',
    '.mjs',
    '.js',
    '.jsx',
    '.vue',
    '.json',
    '.wasm'
  }
}
{
  mode: 'development',
  context: 'E:\\work\\codes\\work\\phoenix-platform-pc',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\work\\codes\\work\\phoenix-platform-pc\\dist\\pms-other',
    filename: 'js/[name].js',
    publicPath: '/',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    alias: {
      '@': 'E:\\work\\codes\\work\\phoenix-platform-pc\\src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules',
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp') */
      {}
    ]
  },
  resolveLoader: {
    modules: [
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-plugin-typescript\\node_modules',
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules',
      'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules'
    ],
    plugins: [
      /* config.resolve.plugin('pnp-loaders') */
      {}
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '57f182f2'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-loader-v16\\dist\\index.js',
            options: {
              cacheDirectory: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '57f182f2',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\file-loader\\dist\\cjs.js',
            options: {
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  implementation: {
                    render: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    renderSync: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    },
                    info: 'dart-sass\t1.34.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.13.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Color: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      List: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Map: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Null: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      },
                      Number: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      String: function () {
                        return _call(f, this, Array.prototype.slice.apply(arguments));
                      },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      toString: function () {
                        return _call(f, Array.prototype.slice.apply(arguments));
                      }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function () {
                      return _call(f, Array.prototype.slice.apply(arguments));
                    }
                  },
                  prependData: '@import "src/assets/global/base.scss";',
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: true,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: true,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\@vue\\cli-service\\node_modules\\postcss-loader\\src\\index.js',
                options: {
                  sourceMap: true
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: true,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '925a8c5a'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\babel-loader\\lib\\index.js'
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('cache-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '76ca0712'
            }
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('cache-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\cache-loader\\dist\\cjs.js',
            options: {
              cacheDirectory: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\.cache\\ts-loader',
              cacheIdentifier: '76ca0712'
            }
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'E:\\work\\codes\\work\\phoenix-platform-pc\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        },
        elementUI: {
          name: 'chunk-elementUI',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-ui(.*)/
        },
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
          priority: 1,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          sourceMap: true,
          cache: true,
          parallel: true,
          extractComments: false
        }
      )
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk-${entrypoint.name}`
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"',
          VERSION: '"1.0.0"',
          API_BASEURL: '"https://api"',
          ROUTER_MODE: '"hash"',
          OTHER_PARAMS: '"other"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'phoenix-platform-pc',
        templateParameters: function () { /* omitted long function */ },
        template: 'E:\\work\\codes\\work\\phoenix-platform-pc\\public\\index.html',
        cdn: {
          css: [],
          js: []
        },
        inject: true
      }
    ),
    /* config.plugin('preload') */
    new PreloadPlugin(
      {
        rel: 'preload',
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/,
          /runtime\..*\.js$/
        ],
        include: 'initial'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: 'E:\\work\\codes\\work\\phoenix-platform-pc\\public',
          to: 'E:\\work\\codes\\work\\phoenix-platform-pc\\dist\\pms-other',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    )
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  },
  devtool: 'cheap-module-source-map',
  externals: {}
}
