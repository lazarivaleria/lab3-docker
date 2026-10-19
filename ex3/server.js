
'use strict';

const express = require('express');

const app = express();
const PORT = 8083;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('<h1>Aplicatia mea Docker</h1><p>Am creat si pornit propriul meu server Node.js.</p>');
});

app.get('/student', (req, res) => {
  res.json({
    proiect: 'Laboratorul 3',
    disciplina: 'Cloud Computing',
    aplicatie: 'Server propriu Node.js'
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Serverul propriu ruleaza pe portul ${PORT}`);
});
