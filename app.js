var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

app.get('/', function (req, res){res.render('bp-pc')})
app.get('/bp-calendar', function (req, res){res.render('bp-calendar')})
app.get('/bp-calendar-ie8', function (req, res){res.render('bp-calendar-ie8')})
app.get('/bp-calendar-select', function (req, res){res.render('bp-calendar-select')})
app.get('/bp-book', function (req, res){res.render('bp-book')})
app.get('/bp-find', function (req, res){res.render('bp-find')})
app.get('/bp-find-result', function (req, res){res.render('bp-find-result')})

app.get('/bp-mobile-summary', function (req, res){res.render('bp-mobile-summary')})
app.get('/bp-mobile-purchase', function (req, res){res.render('bp-mobile-purchase')})


app.listen(3400, function () {
  console.log('App listening on port 3400!')
})