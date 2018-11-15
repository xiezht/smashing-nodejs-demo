
var connect = require('connect')
var http = require('http')

// ----------------- Connect v1.0 --------------------

// var server = connect.createServer()

// server.use(connect.static(__dirname + '/images'))

// server.listen(3000, function() {
//     console.log('listening at port 3000')
// })


// ----------------- Connect v3.6.6 -----------------

// var serveStatic = require('serve-static')


// var app = connect()

// app.use('/images', serveStatic('images'))
// app.use('/images', function(req, res, next) {
//     console.log('GET /images', req.url)
//     next()
// })
// app.use(function(req, res) {
//     res.end()
// })

// http.createServer(app).listen(3000, function() {
//     console.log('listening at port localhost:3000')
// })



// serve-static 托管文件
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')

var app = connect()

app.use(serveStatic('static'))

app.use(bodyParser())

app.use('/upload', function(req, res, next) {
    if ('POST' == req.method) {
        console.log('RECIEVE REQUEST')
        console.log(req.body)
    }
    res.end('Hello world')
})

http.createServer(app).listen(3000, function() {
    console.log('Listening at port 3000')
})


// Other modules：cookie-parser、cookie-session
//                method-override、basic-auth


