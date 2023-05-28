Primero deve baixar a aplicação do github ou baixando pela pasta ZIP pu executando o comando Git clone com a URL do repósitório.
Executando o servidor
Abra novamente o terminal do Visual Studio Code e execute o comando a seguir para abrir o novo site criado. node app.js e abra o seu navegador na url http://localhost:3001.
Testando seu código via Postman
Agora, vamos descobrir quem é o Postman. Veja o vídeo a seguir e siga os passos para executar o seu teste.

https://www.youtube.com/watch?v=I4WfLCXsTSw

Criando uma função soma
Pronto, agora que você consegue ler os dados enviados pelo usuário, vamos usar os dados para realizar uma soma. Veja a função soma a seguir e como integrar ela em seu site.

function soma(a, b) {
  return a + b;
}
Copie e cole essa função para o arquivo app.js e em seguida substitua o código a seguir no corpo da função post.

var body = req.body;
var resultado = soma(body.a, body.b);

res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
