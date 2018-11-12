var http = require('http')
var qs = require('querystring')

var server = http.createServer(function(req, res) {
  if ('/' == req.url) {
    res.writeHead(200, {'content-type': 'text/html' })
    res.write([
      '<form method="POST" action="/url">',
        '<h1>A FORM</h1>',
        '<p>What is your name</p>',
        '<label for="name">PERSONAL INFORMATION</label>',
        '<input type="text" name="name"></input>',
        '<button type="submit">Submit</button>',
      '</form>'
    ].join(''))
    res.end()
  } else if ('/url' == req.url &&  'POST' == req.method) {
    let data = ''
    req.setEncoding('utf-8')
    req.on('data', function(chunk) {
      data += chunk
    })
    req.on('end', function() {
      console.log('DATA', qs.parse(data))
      res.end('yourname is ' + qs.parse(data).name)
    })
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(3000, function() {
  console.log('listening at port 3000.')
})

