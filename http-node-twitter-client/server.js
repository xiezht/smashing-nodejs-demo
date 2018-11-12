var http = require('http')
var qs = require('querystring')

var server = http.createServer(function(req, res) {
  console.log('URL: ', req.url)
  if ('/url' == req.url &&  'POST' == req.method) {
    let data = ''
    req.setEncoding('utf-8')
    req.on('data', function(chunk) {
      data += chunk
    })
    req.on('end', function() {
      console.log('DATA', qs.parse(data))
      res.end('Yourname is ' + qs.parse(data).name)
    })
  } else {
    console.log('404 Not Found')
    res.writeHead(404)
    res.end()
  }
})

// server.listen(3000, function() {
//   console.log('listening at port 3000.')
// })

module.exports = server
