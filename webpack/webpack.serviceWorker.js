const workboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = () => ({
    plugins: [
        new workboxWebpackPlugin({
            src: './src/sw.js'
        })
    ]
})