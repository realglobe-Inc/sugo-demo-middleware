/** This is an example to use sugo-demo-middleware */

'use strict'

const sgServer = require('sg-server')

const server = sgServer({
  middlewares: [
    require('sugo-demo-middleware')({
      // Options
    })
  ],
  routes: {
    /* ... */
  }
})

server.listen(3000)

