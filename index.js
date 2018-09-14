var express = require('express')
var request = require('request')
var moment = require('moment')
var app = express();

app.get('/test', function (req, res) {
  var html = '<h1>test ' +moment().format('LTS') +'</h1>'
  html += '<button id="press">Press</button>'
  html += '<p id="p"> Texto relleno</p>'
  html += '<script src="http://localhost:3003/static/libs/jquery.js"></script>'
  html += '<script src="http://localhost:3003/static/test.js"></script>'
  res.send(html)
})

app.listen(3004, function () {
  console.log('Server Dinamic listening on port 3004!')
});
