// module.exports = (options, req) => ({
module.exports = () => ({
  entry: './src/index.jsx',
  presets: [
    require('poi-preset-react')(),
  ],
  // Other options
});

// Note that you can directly export an object too:
// module.exports = { port: 5000 }
