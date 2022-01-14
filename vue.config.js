module.exports = {
    chainWebpack: config => {
        config.module
            .rule('html')
            .test(/\.html$/)
            .use('html-loader')
            .loader('html-loader')
    },
    pwa: {
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "./src/service-worker.js"
        }
    }
    // // ...other vue-cli plugin options...
    // pwa: {
    //   name: 'My App',
    //   themeColor: '#4DBA87',
    //   msTileColor: '#000000',
    //   appleMobileWebAppCapable: 'yes',
    //   appleMobileWebAppStatusBarStyle: 'black',
  
    //   // configure the workbox plugin
    //   workboxPluginMode: 'InjectManifest',
    //   workboxOptions: {
    //     // swSrc is required in InjectManifest mode.
    //     swSrc: 'dev/sw.js',
    //     // ...other Workbox options...
    //   }
    // }
  }