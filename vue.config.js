module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "src/scss/base/_base.scss";'
      }
    }
  }
}
