var express = require('express')
var request = require('request')
var parser = require('ua-parser-js')
var config = './env'
const port = config.PORT

// app.get('/', function (req, res) {
//   var ua = parser(req.headers['user-agent']);
//   if (ua.os.name === 'Android') {
//    res.redirect("market://details?id=com.flashratings.hodl")
//   }
//   if (ua.os.name == 'iOS') {
//     res.redirect("itms-apps://itunes.apple.com/us/app/hodl-real-time-cryptocurrency/id1253668876")
//   }
// })

app.get('/test', function (req, res) {
  var html = '<html><head></head><body><h1>TEST HEROKU</h1></body></html>'
  res.status(200).send(html)
})
app.listen(port, function () {
  console.log('Server Dinamic listening on port 3004!')
});
