module.exports = {
  // Webpack 4 defaults to the MD4 hash, which OpenSSL 3 (Node 17+) refuses.
  // Using sha256 lets the project build on modern Node without
  // NODE_OPTIONS=--openssl-legacy-provider.
  configureWebpack: {
    output: {
      hashFunction: 'sha256'
    }
  },
  chainWebpack: config => {
    // Same story for the plugin that hashes module ids in production builds.
    if (config.plugins.has('hash-module-ids')) {
      config.plugin('hash-module-ids').tap(args => {
        args[0].hashFunction = 'sha256'
        return args
      })
    }

    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Fruity Bloom'
        return args
      })

    // The Lottie story animations are megabytes of JSON. Keep them out of the
    // main bundle and out of the browser's memory until a month is shown.
    config.module
      .rule('story-animation')
      .test(/assets[\\/]Animation[\\/]Story[\\/].*\.json$/)
      .type('javascript/auto')
      .use('file-loader')
      .loader('file-loader')
      .options({
        // Emitted at the site root on purpose: Lottie resolves an animation's
        // image assets relative to the JSON's own URL, and those live in
        // public/images/<month>/.
        name: 'anim-[name].[contenthash:8].json',
        esModule: false
      })
  }
}
