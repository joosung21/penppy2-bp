var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))
app.use('/node_modules/', express.static('node_modules'))

//- Root Routing
app.get('/', function (req, res){res.render('bp-responsive')})

//- 달력형
app.get('/bp-calendar', function (req, res){res.render('bp-calendar')})
app.get('/bp-calendar-ie8', function (req, res){res.render('bp-calendar-ie8')})
app.get('/bp-calendar-select', function (req, res){res.render('bp-calendar-select')})

//- 달력검색형(반응형)
app.get('/bp-responsive', function (req, res){res.render('bp-responsive')})
app.get('/cart', function (req, res){res.render('cart')})


//- 공통
app.get('/bp-book', function (req, res){res.render('bp-book')})
app.get('/bp-find', function (req, res){res.render('bp-find')})

// 예약확인 PC
app.get('/bp-find-result', function (req, res){res.render('bp-find-result')})
app.get('/bp-find-result-detail', function (req, res){res.render('bp-find-result-detail')})

//- 모바일
app.get('/bp-mobile-summary', function (req, res){res.render('bp-mobile-summary')})
app.get('/bp-mobile-purchase', function (req, res){res.render('bp-mobile-purchase')})

//- 객실가격테이블
// app.get('/price-table', function (req, res){res.render('price-table')})
app.get('/week-calendar', function (req, res){res.render('week-calendar')})

app.listen(3400, function () {
  console.log('App listening on port 3400!')
})