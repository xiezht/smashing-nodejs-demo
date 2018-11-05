var net = require('net')

// 记录在线人数
var count = 0
// 记录用户
var users = {}

// 创建服务器
var server = net.createServer(function(conn) {
  var nickname = ''
  console.log('A new connection!')
  conn.setEncoding('utf8')
  conn.write('> Welcome to NODE-CHAT.\r\n')
  conn.write('> ' + count + ' other people are connected at this time. \r\n')
  conn.write('> Please write your name and press ENTER: ');
  count++;
  conn.on('close', function() {
    count--;
    console.log('Close a connection!')
  })

  conn.on('data', function(data) {
    // 第一份数据应为nickname
    if (!nickname) {
      if (users[data]) {
        conn.write('Nickname has been used. Try again：')
        return
      } else {
        nickname = data
        for (let i in users) {
          users[i].write(nickname + ' joined the room.\r\n')
        }
        users[nickname] = conn
      }
    }
  })

})

server.listen(3000, function() {
  console.log('\033[96m Server lisening on *:3000 \033[39m')
})