
'use strict';

const express = require('express');
const os = require('os');

const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! Serverul meu este: ' + os.hostname() + '\n');
});

app.listen(PORT, HOST, () => {
  console.log(`Serverul ruleaza pe portul ${PORT}`);
});
