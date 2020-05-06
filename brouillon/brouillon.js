APPLI:
client sur ton bureau (local)
app . js = serveur Node
sql= sql distant (109.234.165.84)

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

connection.connect();

connection.query('SELECT '+testvar+' FROM questions', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();

const category=5
const question=4

enter room client

varcategory= rand 1 category
varquestion= rand 1 question
varreponse= rand 1 4

varresponse1= null
varreponse2= null
varreponse3=null
varreponse4=null

varsqlreponse1=null // bonne réponse
varsqlreponse2=null // mauvaise réponse

SQL= select bonne reponseid from question dans var varsqlreponse1

if varreponse = 1
varresponse1= varsqlreponse1
if varreponse = 2
varresponse2= varsqlreponse1
etc

if varreponse1 == null
début boucle
SQL= select reponseid dans reponse from category random dans var varsqlreponse2
if varsqlreponse1 != varsqlreponse2 sortir de la boucle
else
revenir début boucle

etc

envoi id des réponses au client

en attente d'envoi d'id du client

if idclientenvoyé == varsqlreponse1
gagné
else
perdu

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
// index brouillon :

connexion room

attente id question*
attente ids réponse

affichage question et réponse

texte afficher = questionidserveur
texte afficher = reponse1

client répond

attente serveur réponse (gagné ou perdu)


