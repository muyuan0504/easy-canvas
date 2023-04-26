const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    output: {
        filename: 'easy-canvs.js',
        path: path.resolve(__dirname, 'dist'),
        library: {
            name: 'EasyCavas',
            type: 'umd',
        },
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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 禁止loader解析css代码时，将url由相对路径转为绝对路径，保证background等url使用生效
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|ogv|ttf)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    // loader: 'file-loader',
                    options: {
                        limit: 1, //byte
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
    devServer: {
        static: './dist',
    },
    mode: 'development',
}
