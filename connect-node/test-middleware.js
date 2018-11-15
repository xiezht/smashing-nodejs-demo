var connect = require('connect')
var serveStatic = require('serve-static')
var http = require('http')
var timeCouting = require('./reusable-middleware')

var app = connect()

app.use(timeCouting({ time: 500 }))

app.use('/images', serveStatic('images'))

app.use('/a', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.end('Fast responding.')
})

app.use('/b', (req, res) => {
  setTimeout(() => {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('Slow responding.')
  }, 300)
})

app.use((req, res) => {
  res.end('Normal responding')
})

app.use(connect.logger)

http.createServer(app).listen(3000, function() {
  console.log('listening at port 3000.')
})
