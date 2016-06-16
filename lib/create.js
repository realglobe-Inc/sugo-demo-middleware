/**
 * Demo of sugo middleware
 * @function sugoDemoMiddleware
 * @param {object} [options] - Optional settings.
 * @returns {function} - Defined app function.
 */

'use strict'

const co = require('co')
const debug = require('debug')('sugo:demo:middleware')

/** @lends sugoDemoMiddleware */
function create (options = {}) {
  let app = co.wrap(function * app (ctx, next) {
    yield next()
  })

  Object.assign(app, {
    /**
     * Description of this app.
     */
    $desc: '__your_app_description__'
  })

  return app
}

module.exports = create
