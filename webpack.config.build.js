/** build配置 */

const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, './module/index'),
    output: {
        filename: 'index.js',
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
            '@types': path.resolve(__dirname, './types'),
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
    mode: 'production',
}
