//Not working! voir https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
module.exports = {
    css: {
      loaderOptions: {
        stylus: {
          prependData: `@import "@/styles/style.styl";`
        }
      }
    }
  }