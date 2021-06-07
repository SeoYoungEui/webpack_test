const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    hot: true, //HMR을 사용한다는 의미로 따로 HMR를 추가하지 않아도 적용된다.
    //host: '0.0.0.0', // 디폴트로는 "localhost" 로 잡혀있다.  외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
    port: 3000,
    proxy: {
      '**': 'http://127.0.0.1:8090'
    },
    inline: true, //컴파일된 코드를 일반적인 template html에 삽입하는 inline 모드와 iframe에 넣어 업데이트하는 iframe 모드가 있는데 HMR이 inline 모드에서 지원이 되므로 inline 모드를 사용했다.
    publicPath: '/',
    historyApiFallback: true /*HTML5의 History API를 사용하는 경우에 설정해놓은 url 이외의 url 경로로 접근했을때 404 responses를 받게 되는데
     이때도 index.html을 서빙할지 결정하는 옵션이다. 
     React와 react-router-dom을 사용해 프로젝트를 만들때도 react-router-dom이 내부적으로 HTML5 History API를 사용하므로 미지정 경로로 이동했을때,
      있는 경로지만 그 상태에서 refresh를 했을때와 같은 경우에도 애플리케이션이 적절히 서빙될 수 있어서 유용한 옵션이다. */
  }
})
