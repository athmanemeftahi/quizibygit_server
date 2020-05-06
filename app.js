var app = require('express')();
var io = require('socket.io')();

app.listen(443);

var question = 4;
var category = 5;
var reponse = 4;

//var mysql      = require('mysql');
//var connection = mysql.createConnection({
//  host     : '109.234.165.84',
//  user     : 'fastfoodproj_quiziby',
//  password : 'MZSfwm?)+mzd'
//});
// connection.connect();

  io.of('/quiz').on('connection', function (socket) {
  });

  // connexion à la room, l'utilisateur est connecté
  io.on('connection', (socket) => {
    console.log("L'utilisateur est connecté à la room");
  });

 var categorychoose = Math.floor(Math.random() * category) + 1;

 console.log('randomvar: '+categorychoose);