module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};