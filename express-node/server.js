const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function(req, res) {
  res.render('index')
})

app.listen(3000, function() {
  console.log('Listening at port 3000')
})
