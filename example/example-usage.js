/** This is an example to use sugo-demo-middleware */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    // Map url and handlers.
    require('sugo-demo-middleware')({
      // Options
    })
  ]
})

server.listen(3000)

