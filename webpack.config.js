module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "./bundle.js",
    },
    module: {
      rules: [{
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/
      }]
    }
  }