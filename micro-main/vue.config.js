const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  publicPath: isProduction ? '/public/' : '/',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:7000'
      }
    }
  }
}
