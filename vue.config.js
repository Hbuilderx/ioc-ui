
const path = require('path')
module.exports = {
  lintOnSave: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')

  },
  css: {
    loaderOptions: {

     // sass: {
        // data：`@import "~@/assets/variable.scss";` v7之前使用 的是data，现在改成了prependData
      //  prependData: `@import "./packages/common/style/variables.scss";`
        /* prependData: `
              @import "~@/assets/variable.scss";
              @import "~@/assets/variable2.scss";
          ` */
    //  }



      /*sass: {  //webpack 配置 scss 根目录
        includePaths: [path.join(__dirname, 'style')]
      },*/
     // sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        //additionalData: `@import "packages/common/style/variables.sass";`
      //},
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      /*scss: {
        additionalData: `@import "packages/common/style/variables.scss";`
      },*/

    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './packages/common/style/variables.scss'),
        path.resolve(__dirname, './packages/common/style/mixin.scss'),
      ]
    }
  }
}


