var express = require('express')
var request = require('request')
var moment = require('moment')
var router = express.Router()

router.get('/time', function (req, res) {
  var now = new Date()
  console.log(now)
  var time = {
    timestamp: Date.now(),
    year: now.getFullYear()
  }
  res.json(time)
})

router.use(function (req, res, next) {
  console.log('Hi, how are you')
  next()
})

router.get('/anything', function (req, res) {
  console.log('entro en cualquier cosa')
})

module.exports = router
