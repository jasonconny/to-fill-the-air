const path = require('path');
const webpack = require('webpack');
const postcssPresetEnv = require('postcss-preset-env');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async (env={}) => {
    console.log(env);

    const isDev = env.development;
    const isProd = env.production;

    const htmlWebpackPluginOptions = Object.assign(
        {},
        {
            chunks: ['toFillTheAir'],
            inject: true,
            template: path.resolve(__dirname, 'public/index.html'),
        },
        isProd ? {
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        } : undefined
    );

    return {
        mode: isDev ? 'development' : 'production',
        bail: isProd,
        devtool: isDev ? 'inline-source-map' : 'source-map',
        entry: {
            toFillTheAir: path.join(__dirname, 'src/ToFillTheAir.tsx')
        },
        devServer: {
            clientLogLevel: isDev ? 'info' : 'silent',
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: {
                disableDotRule: true
            },
            hot: true,
            port: 3000,
            publicPath: '/',
            watchContentBase: true,
            watchOptions: {
                aggregateTimeout: 750,
                ignored: [
                    'build',
                    'node_modules/**',
                    'src/**/*.scss.d.ts'
                ],
                poll: 5000
            },
        },
        target: 'web',
        output: {
            chunkFilename: 'static/js/[name].chunk.js',
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
            publicPath: '/'
        },
        resolve: {
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.json',
                '.jsx',
            ],
            modules:  [path.resolve(__dirname, './src'), 'node_modules']
        },
        module: {
            strictExportPresence: true,
            rules: [
                // lint
                {
                    test: /\.(js|jsx|ts|tsx)$/,
                    enforce: 'pre',
                    loader: require.resolve('eslint-loader'),
                    include: path.resolve(__dirname, 'src'),
                    options: {
                        eslintPath: require.resolve('eslint'),
                        formatter: 'stylish',
                        quiet: true
                    },
                },
                {
                    oneOf: [
                        // "url" loader works just like "file" loader but it also embeds
                        // assets smaller than specified size as data URLs to avoid requests.
                        {
                            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.woff?2$/],
                            loader: require.resolve('url-loader'),
                            options: {
                                limit: 10000,
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        },
                        // Transpile TypeScript
                        {
                            test: /\.(ts|tsx)$/,
                            include: path.resolve(__dirname, 'src'),
                            loader: require.resolve('babel-loader')
                        },
                        // bundle module specific SCSS
                        {
                            test: /\.scss/,
                            exclude: [/styles.scss/],
                            use: [
                                {
                                    loader: require.resolve('style-loader')
                                },
                                {
                                    loader: require.resolve('@teamsupercell/typings-for-css-modules-loader')
                                },
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 3,
                                        sourceMap: true,
                                        modules: {
                                            exportLocalsConvention: 'camelCase',
                                            mode: 'local',
                                            localIdentName: '[name]__[local]--[hash:base64:5]',
                                            localIdentHashPrefix: 'tfta',
                                        }
                                    }
                                },
                                {
                                    loader: require.resolve('postcss-loader'),
                                    options: {
                                        sourceMap: true,
                                        postcssOptions: {
                                            plugins: [
                                                [postcssPresetEnv]
                                            ]
                                       }
                                    }
                                },
                                {
                                    loader: require.resolve('resolve-url-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                },
                                {
                                    loader: require.resolve('sass-loader'),
                                    options: {
                                        sourceMap: true
                                    }
                                }
                            ]
                        },
                        // default file loader
                        {
                            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                            loader: require.resolve('file-loader'),
                            options: {
                                name: 'static/media/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin({
                cleanStaleWebpackAssets: false
            }),
            new HtmlWebpackPlugin(htmlWebpackPluginOptions),
            new CopyWebpackPlugin({
                patterns: [
                    {from: 'public', to: 'build'}
                ]
            }),
            new ModuleNotFoundPlugin(path.resolve(__dirname, '.')),
            new webpack.HotModuleReplacementPlugin(),
            isDev && new CaseSensitivePathsPlugin(),
            isDev && new WatchMissingNodeModulesPlugin(path.resolve(__dirname, 'node_modules')),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                eslint: {
                    enabled: true,
                    files: ['./src/**/*.ts', './src/**/*.tsx']
                },
                typescript: {
                    configFile: path.resolve(__dirname, 'tsconfig.json'),
                    diagnosticOptions: {
                        syntactic: true
                    },
                    enabled: true
                }
            })
        ].filter(Boolean)
    }
};
