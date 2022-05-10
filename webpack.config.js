const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        main: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[contenthash].js",
        clean: true
    },
    devServer: {port: 3333},
    resolve: {
        extensions: [".ts", ".js"],
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()
        ]
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: "ts-loader"
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}