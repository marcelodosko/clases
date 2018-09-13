var express = require('express')
var request = require('request')
var moment = require('moment')
var app = express();


// app.get('/', function (req, res) {
//   request('http://www.google.com', function (err, ))
//   res.send();
// });

app.use('/static', express.static('assets'));

app.get('/', function (req, res) {
  var html = '<h1>hello' +moment.utc();
  html += '<img src="static/image.png" />';
  html += '</h1>';
  res.send(html);
})

app.listen(3003, function () {
  console.log('Example app listening on port 3000!');
});
