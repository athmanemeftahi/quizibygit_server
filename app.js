var app = require('express')();
var http = require('http');
var server = http.createServer(function(req, res) {
});

var io = require('socket.io').listen(server);

server.listen(8080);

var question = 4;
var category = 5;
var reponse = 4;

var mysql      = require('mysql');
var connection = mysql.createConnection({
host     : '109.234.165.84',
user     : 'fastfoodproj_quiziby',
password : 'mP)=dZ5vm=e1'
});

connection.connect();

io.sockets.on('connection', function (socket) {
    console.log('client connecté');
});

 var questionchoose = Math.floor(Math.random() * question) + 1;
  console.log('randomvar: '+questionchoose);

 var categorychoose = Math.floor(Math.random() * category) + 1;
 console.log('randomvar: '+categorychoose);

 var reponsechoose = Math.floor(Math.random() * reponse) + 1;
 console.log('randomvar: '+reponsechoose);