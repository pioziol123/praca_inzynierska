const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "app.js"
  },
  optimization: {
    minimize: false
  },
};
