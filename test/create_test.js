/**
 * Test case for create.
 * Runs with mocha.
 */
'use strict'

const create = require('../lib/create.js')
const co = require('co')
const sgServer = require('sg-server')
const apemanrequest = require('apemanrequest')
const apemansleep = require('apemansleep')
const apemanport = require('apemanport')
const assert = require('assert')

describe('create', () => {
  let server, baseUrl
  let request = apemanrequest.create()
  let sleep = apemansleep.create()
  before(() => co(function * () {
    let middleware = create({})
    assert.ok(middleware)
    let port = yield apemanport.find()
    server = sgServer({
      middlewares: [
        middleware
      ],
      endpoints: {
        '/foo/bar': (ctx) => {
          ctx.body = 'done!!'
        }
      }
    })
    baseUrl = `http://localhost:${port}`
    yield server.listen(port)
  }))

  after(() => co(function * () {
    yield sleep.sleep(10)
    yield server.close()
  }))

  it('Send a request', () => co(function * () {
    let { body, statusCode } = yield request({
      method: 'GET',
      url: `${baseUrl}/foo/bar`
    })
    assert.equal(body, 'done!!')
    assert.equal(statusCode, 200)
  }))
})

/* global describe, before, after, it */
