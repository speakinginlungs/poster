const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/posts', (req, res) => {
  res.sendFile(path.join(__dirname, 'posts.html'));
});

app.listen(3000);
