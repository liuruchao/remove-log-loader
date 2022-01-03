const fs = require('fs')
const path = require('path')

const { runLoaders } = require('loader-runner')

runLoaders(
  {
    resource: path.join(__dirname, './__test__/test.js'),
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
    if (err) {
      console.log(err, '报错')
    } else {
      console.log(result)
    }
  }
)
