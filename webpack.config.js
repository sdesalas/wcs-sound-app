module.exports={
  entry:'./renderer.js',
  output:{
    filename:'./renderer-bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  }
}