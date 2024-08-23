//configurações de rotas 

const http = require("http"); //importação
const express = require("express"); //importação
const app = express();

app.get("/filmes", function(req, res) {  //request e response
    res.send("<h1>123</h1>")
});


app.get("/series", function(req, res) {  //request e response
    res.send("<h1>Series</h1>");
});

http.createServer(express).listen(3000, () => console.log("entrou no cu de mano"));

