var express = require('express')
var request = require('request')
var parser = require('ua-parser-js')
var config = require('./env')
const port = config.PORT
var app = express();

app.get('/', function (req, res) {
  var ua = parser(req.headers['user-agent']);
  if (ua.os.name === 'Android') {
   res.redirect("market://details?id=com.flashratings.hodl")
   window.close()
  }
  if (ua.os.name == 'iOS') {
    res.redirect("itms-apps://itunes.apple.com/us/app/hodl-real-time-cryptocurrency/id1253668876")
    window.close()
  }
})

app.listen(port, function () {
  console.log('Server Dinamic listening on port:', port)
});
