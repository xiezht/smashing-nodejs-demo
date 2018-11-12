var http = require('http')
var qs = require('querystring')
var request = require('superagent')

// ---------Section 1---------------

// http.request({
//   'host': '127.0.0.1',
//   'port': 3000,
//   'path': '/url',
//   'method': 'POST'
// }, (res) => {
//   var data = ''
//   res.setEncoding('utf8')
//   res.on('data', (chunk) => {
//     data += chunk
//   })
//   res.on('end', () => {
//     console.log('RESPONSE DATA\n', data)
//   })
// }).end(qs.stringify({ name: 'SKT Faker' }))

// ---------- Section 2-------------

// console.log(process.argv)
// var queryStr = process.argv.slice(2).join(' ').trim()
// http.get({
//   host: '23.106.129.129',
//   port: 3000,
//   path: '/search?' + qs.stringify({ keywords: queryStr })
//   // path: '/search?' + qs.stringify( {keywords: '海阔天空'} )
//   // method: 'GET'  
// }, (res) => {
//   var data = ''
//   res.setEncoding('utf-8')
//   res.on('data', (chunk) => {
//     data += chunk
//   })
//   res.on('end', () => {
//     var songs = JSON.parse(data).result.songs
    
//     songs.forEach((value, index) => {
//       console.log(index, value.name, value.artists[0].name)
//     })
//   })
// })


// -----------Section 3--------------

request.get('23.106.129.129:3000/search')
       .query({keywords: 'love'})
       .end((err, res) => {
         console.log(res.body)
       })