"use strict";
// Express --> gerenciar coisas dentro de uma API
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000; //3000 é uma porta
//codifique aqui
//requisição e resposta 
app.get('/', function (request, response) {
    response.send('Hello world'); // send: função enviar resposta para o usuário
});
app.listen(port, function () {
    console.log("Server is running at port".concat(port));
});
