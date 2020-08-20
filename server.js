var express = require('express')
var app = express()

var adder = function(num1,num2){
    var sum = num1 + num2
    return sum
}

app.use(express.static(__dirname + '/public'));
app.get('/test', function(req,res){
    var username = req.query.username;
    console.log('I have been hit');
    res.send('You hit me! '+username);
})

app.get('/sum', function(req,res){
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var sum = adder(num1,num2);
    res.send('The sum is: '+sum);
})

//listen to a port
var port = 3000
app.listen(port)
console.log('server listening on port '+port)