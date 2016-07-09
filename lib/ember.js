'use strict'
const config = require('./defaults.js')

config.env = {
  browser: true,
  jquery: true,
}
config.rules['import/no-unresolved'] = [0]
config.rules['no-underscore-dangle'] = [2, { allowAfterThis: true }]

module.exports = config
