module.exports = {
  module: {
    rules: [
      {
        rest: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
