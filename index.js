var express = require('express')
var request = require('request')
var parser = require('ua-parser-js')
var app = express();

app.get('/test', function (req, res) {
  var ua = parser(req.headers['user-agent']);
  if (ua.os.name === 'Android') {
   res.redirect("market://details?id=com.flashratings.hodl")
  }
  if (ua.os.name == 'iOS') {
    res.redirect("itms-apps://itunes.apple.com/us/app/hodl-real-time-cryptocurrency/id1253668876")
  }
})
app.listen(3004, function () {
  console.log('Server Dinamic listening on port 3004!')
});
