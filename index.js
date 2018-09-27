var express = require('express')
var request = require('request')
var moment = require('moment')
var api = require('./api')
var dinamic = require('./dinamic')
var app = express()


app.use('/static', express.static('assets'));
app.use('/api', api)
app.use('/', dinamic)

app.listen(3005, function () {
  console.log('API REST listening on port 3005!')
})
