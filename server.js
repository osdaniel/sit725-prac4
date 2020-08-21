var express = require('express')
var app = express()
const MongoClient = require('mongodb').MongoClient;

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

console.log('server listening on port '+port)

app.get('/message', function(req,res){
    let message = req.query.message;
    insertMessage(message);
    res.send('added');
})

//Database Management
const uri = "mongodb+srv://SIT725:sit725@sit725.aftzp.mongodb.net/messageboard?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let collectionMessage;

client.connect(err => {
 collectionMessage = client.db("messageboard").collection("messages");
  });

const insertMessage=(message)=>{
  collectionMessage.insertOne({message:message});
}

setTimeout(function(){
    insertMessage('Hello World')
}, 1000);



