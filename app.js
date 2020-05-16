var app = require('express')();
var http = require('http');
var server = http.createServer(function(req, res) {
});

var io = require('socket.io').listen(server);

server.listen(8080);

var question = 4;
var category = 5;
var reponses = 4;

var mysql = require('mysql');
var connectionsql = mysql.createConnection({
host     : '109.234.165.84',
user     : 'fastfoodproj_quiziby',
password : 'mP)=dZ5vm=e1',
database: "fastfoodproj_quiziby"
});

io.sockets.on('connection', function (socket) {
    console.log('client connecté');
});

 var questionchoose = Math.floor(Math.random() * question) + 1;

 var categorychoose = Math.floor(Math.random() * category) + 1;

 var reponsechoose = Math.floor(Math.random() * reponses) + 1;

var reponse1 = null;
var reponse2 = null;
var reponse3 = null;
var reponse4= null;
var sqlreponse1=null;
var sqlreponse2=null;

connectionsql.connect(function(err) {
  if (err) throw err;
  connectionsql.query("SELECT id_answer FROM questions WHERE id_question="+questionchoose, function (err, sqlreponse1, fields) {
    if (err) throw err;
    console.log(sqlreponse1);
  });
});

// INSERT INTO `questions` (`id_question`, `id_answer`, `id_category`) VALUES ('1', '4', '1');

// bonne réponse dans la bonne variable
if (reponsechoose === 1) {
  var reponse1 = varsqlreponse1;
} else if (reponsechoose === 2) {
  var reponse2 = varsqlreponse1;
} else if (reponsechoose === 3) {
  var reponse3 = varsqlreponse1;
} else if (reponsechoose === 4) {
  var reponse4 = varsqlreponse1;
}

// Mauvaises réponses
if (reponse1 == null) {
  var varok = 0;
  while(varok==0)
  {
    connectionsql.connect(function(err) {
      if (err) throw err;
      connectionsql.query("SELECT id_answer FROM questions WHERE id_question="+questionchoose, function (err, sqlreponse2, fields) {
        if (varsqlreponse1 != varsqlreponse2) varok = 1;
        if (err) throw err;
        console.log(sqlreponse2);
      });
    }); 
  }
}
