const fs = require('fs')
const path = require('path')

const { runLoaders } = require('loader-runner')

runLoaders(
  {
    resource: path.join(__dirname, './test/test.js'),
    loaders: [
      {
        loader: path.join(__dirname, './src/index.js'),
      },
    ],
    context: {
      minimize: true,
    },
    readResource: fs.readFile.bind(fs),
  },
  (err, result) => {
    err ? console.log(err) : console.log(result)
  }
)
