const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve (value) {
    return path.resolve(__dirname, value);
}

module.exports = {
    mode: "development",
    entry: "./public/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "beautylog.min.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            title: "Vue APP",
            filename: "index.html",
            template: resolve("./public/index.html"),
            inject: "body"
        }),
    ],
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true,
        hot: true
    },
};