var btn = document.getElementById('press')
var p = document.getElementById("p")

var resHandler = function(data) {
  console.log(data)
  p.innerHTML = data.timestamp
}
var errorHandler = function(error) {
  console.log(error)
  p.innerHTML = 'ERROR!'
}

jQuery.get('http://localhost:3005/api/time', resHandler, errorHandler)
