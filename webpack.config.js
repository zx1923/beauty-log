
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/beauty-log.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "beauty-log.js",
        libraryTarget: "umd",
        globalObject: "this",
        library: "beautyLog"
    }
};