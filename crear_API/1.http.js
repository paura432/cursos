const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = ((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if(req.url === '/'){
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi página de inicio<h1>')
  } else if(req.url == '/imagen') {
    fs.readFile('../capturas_inf/status_codes.png', (err, data) => {
      if(err){
        res.statusCode = 500
        res.end('<h1>500 internal server error<h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if(req.url == '/Contacto') {
    res.statusCode = 200
    res.end('<h1>Contacto<h1>')
  } else {
    res.status = 404
    res.end('<h1>404<h1>')
  }  
})

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`server is lisening in the port http://localhost:${desiredPort}`)
})
