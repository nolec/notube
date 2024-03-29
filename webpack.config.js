const path = require("path");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");
const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    mode: MODE,
    module: {
      rules: [
        {
          test: /\.(scss)$/
        }
      ]
    },
    filename: "[name].[format]"
  }
};

module.exports = config;
