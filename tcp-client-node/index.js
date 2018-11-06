var net = require('net')

var client = net.connect(3000, 'localhost', function(socket) {
    socket.write('NICK mynick\r\n')
    socket.write('USER mynick 0 * :realname\r\n')
    socket.write('JOIN #node.js\r\n')
})

