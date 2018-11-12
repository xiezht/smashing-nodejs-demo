
var connect = require('connect')
var http = require('http')

// ----------------- Connect v1.0 --------------------

// var server = connect.createServer()

// server.use(connect.static(__dirname + '/images'))

// server.listen(3000, function() {
//     console.log('listening at port 3000')
// })


// ----------------- Connect v3.6.6 -----------------

var serveStatic = require('serve-static')

var serve = serveStatic('images')

var app = connect()

app.use(serve)
app.use('/images', function(req, res, next) {
    res.write('GET images')
    next()
})
app.use(function(req, res) {
    res.end()
})

http.createServer(app).listen(3000, function() {
    console.log('listening at port 3000')
})
