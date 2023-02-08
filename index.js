const express = require('express');
// Estanciando / Recebendo a constante express
const server = express();
// Servidor chamando a função express
const filmes = require('./src/data/filmes.json');
// Importando json pro index.js

server.get('/filmes', (req,res) => {
    return res.json(filmes)
});
// server.requisição ( são várias )
// Escrevendo return res.json({mensagem: 'Nossa APi está funcionando'})
// Acessando http://localhost:3000/ vai mostrar :
// {mensagem: 'Nossa APi está funcionando'}
//
// Escrevendo return res.json({usuario: 'Daniel'})
// Será preciso dar um CTRL C no node / cmd
// Dar um node index.js
// E acessar http://localhost:3000/usuario 
// Será mostrado {usuario: 'Daniel'}

server.listen(3000, () => {
    console.log('Servidor está funcionando ...')
});
// Servidor vai escutar na porta 3.000 
// Todo vez que iniciar o servidor vai mostrar a mensagem do console.log