const path = require('path')

module.exports = {
  // entry file
  entry: ['@babel/polyfill', { app: './src/index.js' }], // 번들 작업할 파일
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, 'dist/js'), // 번들화 된 파일 경로
    filename: 'bundle.js', //  [name]은 entry에서 설정한 app인 파일이름이 [name]으로 들어가 app.bundle.js로 번들 파일을 생성해준다.
    publicPath: '/' //파일들이 위치할 서버 상의 경로이다.
  },
  // 웹팩이 알아서 경로나 확장자를 처리할 수 있게 도와주는 옵션이다.
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  //watch: true, // 자동 번들화 작업 여부
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src/js')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
              { corejs: 3 }
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'development'
}
