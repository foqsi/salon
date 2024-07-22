const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
require('dotenv').config()

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false),
        'process.env': {
          VUE_APP_GOOGLE_MAPS_API_KEY: JSON.stringify(process.env.VUE_APP_GOOGLE_MAPS_API_KEY)
        }
      })
    ]
  }
})
