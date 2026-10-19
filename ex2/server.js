
'use strict';

const express = require('express');
const os = require('os');

const app = express();
const PORT = 8082;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Acesta este al doilea server Docker. Hostname: ' + os.hostname());
});

app.get('/info', (req, res) => {
  res.json({
    aplicatie: 'Serverul 2',
    limbaj: 'Node.js',
    hostname: os.hostname()
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Serverul 2 ruleaza pe portul ${PORT}`);
});
