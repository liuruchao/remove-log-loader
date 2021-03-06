const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'remove.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: 'removeLog',
      type: 'commonjs',
    },
  },
  resolve: {
    fallback: { assert: false, constants: false, os: false, fs: false },
  },
}
