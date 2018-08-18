module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://sims.car2go.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
