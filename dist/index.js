
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./vnetwork-ui-system.cjs.production.min.js')
} else {
  module.exports = require('./vnetwork-ui-system.cjs.development.js')
}
