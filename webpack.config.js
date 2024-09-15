const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@angular/localize/init": path.resolve(
        __dirname,
        "node_modules/@angular/localize/init"
      ),
    },
  },
  externals: {
    "@angular/localize/init": "@angular/localize/init",
  },
};
