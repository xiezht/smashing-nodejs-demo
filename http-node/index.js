var http = require('http')
var fs = require('fs')

// var server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'content-type': 'image/png'
//     })
//     var stream = fs.createReadStream('./570960.png')
//     stream.pipe(res)
//     // res.write('This is the first chunk.<br/>')
//     // res.end('Hello <strong>World2</strong>')
// })

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.end([
        '<form method="POST" action="/url">',
            '<h1>My Form</h1>',
            '<label>Personal information</label>',
            '<p>What is yoyr name</p>',
            '<input type="text" name="name"></input>',
            '<p><button>Submit</button></p>',
        '</form>'
    ].join(''))
})

server.listen(3000)

