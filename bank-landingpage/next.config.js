const withImages = require('next-images')
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif", "svg"],
  esModule: true,
  webpack(config, options) {
    return config
  }
})

module.exports = {
  reactStrictMode: true,
  // images: {
  //   disableStaticImages: true
  // }
}