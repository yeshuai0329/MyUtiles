module.exports = {
  plugins: [
    // require('autoprefixer')('last 100 versions' )
    require('autoprefixer')({
      overrideBrowserslist: [
        'last 10 Chrome versions',
        'last 5 Firefox versions',
        'Safari >= 6',
        'ie> 8',
        'iOS >= 8',
        'Android >= 4.4'
      ]
    })
  ]
}
