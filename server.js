var express = require('express')
var app = express()


app.use(express.static(__dirname + '/public'));
//listen to a port
var port = 3000
app.listen(port)
console.log('server listening on port '+port)