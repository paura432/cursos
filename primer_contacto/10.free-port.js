const net = require('node:net')

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // El puerto deseado está en uso, intentamos con el siguiente
        findAvailablePort(desiredPort + 1).then(resolve)
      } else {
        // Otro tipo de error
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
