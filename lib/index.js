/**
 * Demo of sugo middleware
 * @module sugo-demo-middleware
 * @version 1.0.9
 */

'use strict'

const create = require('./create')
const pkg = require('../package.json')

let lib = create.bind(this)

Object.assign(lib, create, {
 create,
 version: pkg.version
})

module.exports = lib
