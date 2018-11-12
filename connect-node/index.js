
var connect = require('connect')

var server = connect.createServer()

server.use(connect.static(__dirname + '/images'))

server.listen(3000, function() {
    console.log('listening at port 3000')
})


