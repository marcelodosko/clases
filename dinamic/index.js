var express = require('express')
var request = require('request')
var moment = require('moment')
var router = express.Router()

router.get('/test', function (req, res) {
  try {
  var html = '<h1>test ' +moment().format('LTS') +'</h1>'
  html += '<button id="press">Press</button>'
  html += '<p id="p"> Texto relleno</p>'
  // html += '<script src="/static/libs/jquery.js"></script>'
  // html += '<script src="/static/test.js"></script>'
  return res.send(html)
}
catch (error) {
  return res.status(401).send(error)
}
})

router.get('/hello', function (req, res) {
  var html = `<html><head></head><body>hello</body></html>`
  res.send(html)
})

module.exports = router
