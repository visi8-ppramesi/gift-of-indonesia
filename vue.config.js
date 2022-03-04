process.env.VUE_APP_VERSION = process.env.npm_package_version
module.exports = {
    devServer: {
        disableHostCheck: true
    },
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
        },
        name: 'gift-of-indonesia',
        manifestOptions: {
            short_name: "Path of Indonesia",
            theme_color: "#4DBA87",
            start_url: "https://gift-of-indonesia.netlify.app/",
            id: "https://gift-of-indonesia.netlify.app/",
            description: "Welcome to Indonesia.",
            icons:[
                {
                    src: "./img/icons/android-chrome-192x192.png",
                    sizes: "192x192",
                    type: "image/png"
                },
                {
                    src: "./img/icons/android-chrome-512x512.png",
                    sizes: "512x512",
                    type: "image/png"
                },
                {
                    src: "./img/icons/android-chrome-maskable-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                    purpose: "maskable"
                },
                {
                    src: "./img/icons/android-chrome-maskable-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "maskable"
                }
            ],
            display: "standalone",
            background_color: "#000000",
            scope: "https://gift-of-indonesia.netlify.app/"
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