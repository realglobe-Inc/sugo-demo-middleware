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
  let middleware = co.wrap(function * middleware (ctx, next) {
    yield next()
  })

  Object.assign(middleware, {
    /**
     * Description of this middleware.
     */
    $desc: '__your_middleware_description__'
  })

  return middleware
}

module.exports = create
