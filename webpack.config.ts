import { join, resolve } from "path";
import { Configuration } from "webpack";
const WatchIgnorePlugin = require("webpack").WatchIgnorePlugin;

export default {
    entry: {
        index: './src/ClientApp.tsx'
    },
    plugins: [
        new WatchIgnorePlugin([
            resolve('webpack.config.ts')
        ])
    ],
    output: {
        path: join(__dirname, '/public'),
        filename: 'shared.bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/public/'
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    }
} as Configuration;
