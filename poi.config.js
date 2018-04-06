module.exports = (options, req) =>({
  entry: './src/index.js',
  presets: [
    require('poi-preset-react')()
  ],
  // Other options
})

// Note that you can directly export an object too:
// module.exports = { port: 5000 }
