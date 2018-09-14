var express = require('express')
var request = require('request')
var moment = require('moment')
var app = express();

app.use('/static', express.static('assets'));

app.listen(3003, function () {
  console.log('Static Server listening on port 3003!');
});
