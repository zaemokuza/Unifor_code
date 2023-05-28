var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('FORTALEZA É CAMPEÃO');
});

var port = 3001;

// iniciando o processo do servidor//
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function divisor(a, b) {
    return a / b;
}



app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado = soma(body.a, body.b);
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado = subtracao(body.a, body.b);
  res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/mulplicacao', function (req, res) {
  var body = req.body;
  var resultado = multiplication(body.a, body.b);
  res.send(`O resultado da mulplicacao de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/divisor', function (req, res) {
  var body = req.body;
  var resultado = divisor(body.a, body.b);
  res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado}`);
});


