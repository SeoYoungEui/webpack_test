const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //서버를 띄울 때마다 임시 index.html 파일을 만들어 사용한다.
const Dotenv = require('dotenv-webpack') //.env 파일로 간단하게 노드의 환경 변수를 설정

module.exports = {
  // 번들 작업할 파일
  entry: ['@babel/polyfill', './src/index.js', './src/styles/sass/main.scss'],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    filename: '[name].bundle.js', //  [name]은 entry에서 설정한 app인 파일이름이 [name]으로 들어가 app.bundle.js로 번들 파일을 생성해준다.
    path: path.resolve(__dirname, 'dist/js'), // 번들화 된 파일 경로
    publicPath: '/' //파일들이 위치할 서버 상의 경로이다.
  },
  //확장자를 생략하기 위한 설정
  resolve: {
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, './src/components/'),
      globalize$: path.resolve(__dirname, 'node_modules/globalize/dist/globalize.js'),
      globalize: path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),
      cldr$: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
      cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr')
    },
    extensions: ['.js', '.jsx', '.json', '.css'] //여기에 확장자를 적어줌
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        include: [path.resolve(__dirname, './src')],
        exclude: ['/node_modules'], // node_modules 폴더 제외
        use: {
          //로더 이름
          loader: 'babel-loader',
          // 로더의 옵션
          options: {
            //preset이란 플러그인의 모음
            presets: [
              '@babel/preset-env', //babal/preset-env를 사용한다
              '@babel/preset-react', // 리액트를 쓴다면
              '@babel/preset-typescript' // 타입스크립트를 쓴다면
            ],
            //옵션에 사용할 플러그인
            plugins: [
              ['@babel/plugin-proposal-class-properties'],
              ['@babel/plugin-transform-runtime', { corejs: 3 }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        use: 'url-loader?name=[name].[ext]'
      }
    ]
  },

  //사용할 플러그인을 나열한다.
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html', // output으로 출력할 파일은 index.html 이다
      showErrors: true // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
    }),
    new Dotenv()
  ],
  devtool: 'source-map',
  // https://webpack.js.org/concepts/mode/#mode-development
  mode: 'common'
}
