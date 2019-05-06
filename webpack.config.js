const webpack = require('webpack');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
	if (argv.mode !== 'production') {
		console.log('Looks like we are in development mode!');
	}

	return {
		mode: argv.mode,
		entry: {
			bundle: ["@babel/polyfill",'./client/main.js']
		},
		output: {
			path: __dirname + '/public',
			filename: '[name].js',
			chunkFilename: '[name].[id].js'
		},
		module: {
			rules: [
				{ test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'babel-loader',
							options: {
								presets: ['@babel/preset-env','@babel/preset-react'],
							}
						}
					]
				},{
					test: /\.scss$/,
					use: [
						argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
						"css-loader", // translates CSS into CommonJS
						{
							loader: "sass-loader",
							options: {
								includePaths: [__dirname + '/node_modules']
							}
						} // compiles Sass to CSS, using Node Sass by default
					]
				}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new MiniCssExtractPlugin({
				path: __dirname + '/public',
				filename: "[name].css",
				chunkFilename: "[id].css"
			})
		],
		devServer: {
			compress: true,
			disableHostCheck: true,
			headers: { "X-Custom-Header": "yes" },
			proxy: {
				'/api/*': {
					proxyTimeout: 120000,
					target: 'http://localhost:8000/',
					secure: false,
					changeOrigin: false,
					ws: true,
					xfwd: true,
				},
				'/vendor*': {
					proxyTimeout: 120000,
					target: 'http://localhost:8000/',
					secure: false,
					changeOrigin: false,
					ws: true,
					xfwd: true,
				}
			}
		}
	};
};