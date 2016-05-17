const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js"
    },
    module: {
      loaders: [{
          test: /\.jsx?$/,
          loader: 'babel',
          query:
          {
              presets:['es2015', 'react']
          }
      }]
    },
};
