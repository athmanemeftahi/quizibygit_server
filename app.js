var app = require('express')();
var http = require('http');
var io = require('socket.io')(http);
var server = http.createServer(function(req, res) {
});

server.listen(8080);

 // connexion SQL
 var mysql = require('mysql');
 var connectionsql = mysql.createConnection(
   {
   host     : '109.234.165.84',
   user     : 'fastfoodproj_quiziby',
   password : 'mP)=dZ5vm=e1',
   database: "fastfoodproj_quiziby"
   }
 );
 
 connectionsql.connect();

//Initialisation variables
var question = 4;
var category = 1;
var reponses = 4;
var reponse1 = 0;
var reponse2 = 0;
var reponse3 = 0;
var reponse4 = 0;
var varsqlbonnereponse = 0;

//Port socket OK
io.sockets.on('connection', function (socket) {
    console.log('client connecté');
});

//Randomisation variables selon constantes
 var questionchoose = Math.floor(Math.random() * question) + 1;
 console.log("ID question: "+questionchoose);

 var categorychoose = Math.floor(Math.random() * category) + 1;
 console.log("ID catégorie: "+categorychoose);

 var reponsechoose = Math.floor(Math.random() * reponses) + 1;
 console.log("Emplacement de la réponse: "+reponsechoose);

//Chercher la bonne réponse de la question
var queryString = "SELECT id_answer FROM questions WHERE id_question="+questionchoose;

connectionsql.query(queryString, function(err, rows, fields) {
  if (err) throw err;
  varsqlbonnereponse = rows[0].id_answer;
  console.log("ID Bonne réponse: "+varsqlbonnereponse);
});

// Bonne réponse dans choix du joueur
if (reponsechoose === 1) {
  var reponse1 = varsqlbonnereponse;
} else if (reponsechoose === 2) {
  var reponse2 = varsqlbonnereponse;
} else if (reponsechoose === 3) {
  var reponse3 = varsqlbonnereponse;
} else if (reponsechoose === 4) {
  var reponse4 = varsqlbonnereponse;
}

for (varbreak = 0; varbreak < 1; varbreak++) {
  var queryString = "SELECT id_answer FROM answers WHERE id_category="+categorychoose+" ORDER BY RAND() LIMIT 1";
  connectionsql.query(queryString, function(err, rows, fields)
  {
    if (err) throw err;
    if (varsqlbonnereponse != rows[0].id_answer){
      console.log('varbreak: ', varbreak);
      reponse1 = rows[0].id_answer;
      console.log('ID bonne réponse 1: ', reponse1);
    }
    else
    {
      varbreak=varbreak-1;
    }
  }
  );
}

io.on('connect', onConnect);
function onConnect(socket){
  // Envoi des réponses au client
  socket.emit('reponse', reponse1, reponse2, reponse3, reponse4);
   // Quand le serveur reçoit un des choix du client  
 socket.on('reponse1', 'reponse2', 'reponse3', 'reponse4', function (reponse) {
  console.log('le client répond : ' + reponse);
})
}


