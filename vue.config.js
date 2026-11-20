const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    // vue-loader 15 (Vue 2) emits an unused `import styleN from ...` for each
    // <style> block; webpack >= 5.110 flags it. Styles still load correctly.
    ignoreWarnings: [/export 'default' \(imported as 'style\d+'\) was not found/]
  }
})
