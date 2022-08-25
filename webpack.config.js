// webpack.config.js

/* eslint-env es6 */
/* eslint-disable no-console */
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [new Dotenv()],

  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
};
