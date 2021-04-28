
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/beautyLog.js",
    module: {
        rules:[
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "beautylog.min.js",
        libraryTarget: "umd",
        globalObject: "this",
        library: "BeautyLog"
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
};