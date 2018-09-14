var express = require('express')
var request = require('request')
var moment = require('moment')
var app = express()


app.get('/api/time', function (req, res) {
  var now = new Date()
  var time = {
    timestamp: Date.now(),
    year: now.getFullYear()
  }
  res.json(time)
})

app.listen(3005, function () {
  console.log('API REST listening on port 3005!')
})
