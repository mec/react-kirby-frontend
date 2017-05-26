var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: [ 'style-loader', 'css-loader']},
			{
			  test: /\.(ttf|eot|woff|woff2)$/,
			  loader: 'file-loader',
			  options: {
			    name: 'fonts/[name].[ext]',
			  },
			},
			{
				test: /\.svg$/,
				loader: 'file-loader',
				options: {
					name: 'image/[name].svg'
				}
			}
		]
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [ new htmlWebpackPlugin({
		template: './src/index.html'
	})]
}
