const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PostcssNormalize = require('postcss-normalize');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env = {}) => {
	return {
		devServer: {
			compress: true,
			contentBase: path.join(__dirname, '/public'),
			historyApiFallback: {
				disableDotRule: true
			},
			hot: true,
			port: 3000,
			publicPath: '/',
			watchContentBase: true
		},
		devtool: 'inline-source-map',
		entry: {
			toFillTheAir: path.join(__dirname, 'src/ToFillTheAir.tsx')
		},
		module: {
			strictExportPresence: true,
			rules: [
				// lint
				{
					test: /\.(js|jsx|ts|tsx)$/,
					enforce: 'pre',
					include: path.resolve(__dirname, '/src'),
					use: [
						{
							loader: require.resolve('eslint-loader'),
							options: {
								eslintPath: require.resolve('eslint')
							}
						}
					]
				},
				{
					oneOf: [
						// bundle static assets
						{
							test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.woff?2$/],
							loader: require.resolve('url-loader'),
							options: {
								limit: 10000,
								name: 'static/media[name].[hash:8].[ext]'
							}
						},
						// bundle TypeScript
						{
							test: /\.(ts|tsx)$/,
							include: path.join(__dirname, 'src'),
							loader: require.resolve('ts-loader')
						},
						// bundle SCSS
						{
							test: /\.scss/,
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
										localsConvention: 'camelCase',
										modules: {
											hashPrefix: 'tfta',
											localIdentName: '[name]__[local]--[hash:4]',
											mode: 'local'
										},
										onlyLocals: false,
										sourceMap: true
									}
								},
								{
									loader: require.resolve('postcss-loader'),
									options: {
										ident: 'postcss',
										sourceMap: true,
										plugins: () => [
											PostcssNormalize()
										]
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
					],
				}
			]
		},
		optimization: {
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: 1,
				name: false
			},
			runtimeChunk: {
				name: entrypoint => entrypoint.name
			}
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, '/build'),
			pathinfo: true,
			publicPath: '/'
		},
		plugins: [
			new webpack.ProgressPlugin(),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				chunks: ['toFillTheAir'],
				inject: true,
				template: path.join(__dirname, 'public/index.html')
			}),
			new CopyWebpackPlugin([
				{
					from: path.join(__dirname, '/public'),
					to: path.join(__dirname, '/build')
				}
			]),
			new ForkTsCheckerWebpackPlugin({
				async: false,
				eslint: true,
				typescript: resolve.sync('typescript', {
					basedir: path.resolve(__dirname, 'node_modules')
				}),
				watch: path.join(__dirname, '/src')
			}),
			new webpack.WatchIgnorePlugin([
				/scss\.d\.ts$/
			])
		],
		resolve: {
			extensions: [
				'.mjs',
				'.web.ts',
				'.ts',
				'.web.tsx',
				'.tsx',
				'.web.js',
				'.js',
				'.json',
				'.web.jsx',
				'.jsx',
			]
		},
		watch: env.watch,
		watchOptions: {
			aggregateTimeout: 500,
			ignored: [
				'build',
				'node_modules'
			],
			poll: 1000
		}
	}
};
