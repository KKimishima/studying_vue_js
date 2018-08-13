const {VueLoaderPlugin} = require('vue-loader')

// webpack.config.js
module.exports = {
  // メインとなるソースファイル
  entry: './src/index.js',
  // 出力設定
  // この場合はdest/bundle.jsというファイルが生成される
  output: {
    // 出力先のファイル名
    filename: 'bundle.js',
    // 出力先のファイルパス
    path: `${__dirname}/dist`,
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 3003
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
}