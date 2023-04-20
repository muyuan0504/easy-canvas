const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    output: {
        filename: 'easy-canvs.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        extensionAlias: {
            '.js': ['.js', '.ts'],
            '.cjs': ['.cjs', '.cts'],
            '.mjs': ['.mjs', '.mts'],
        },
        alias: {
            '@img': path.resolve(__dirname, './static/image'),
        },
    },
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.[s[ac]|c]ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    // loader: 'file-loader',
                    options: {
                        limit: 1024 * 1024 * 100, //byte
                        name: '[name]_[hash].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './template.html'),
        }),
    ],
}
