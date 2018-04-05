var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('bp-pc')})
app.get('/bp-pc-book', function (req, res){res.render('bp-pc-book')})

app.listen(3400, function () {
  console.log('App listening on port 3400!')
})