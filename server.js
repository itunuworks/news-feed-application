// import express from 'express';
const express = require('express');

const app = express();
const router = express.Router();
const viewsPath = __dirname + '/src/';

app.set('port', process.env.PORT || 3000);

router.get('/', (req, res) => {
  console.log(viewsPath + 'index.html');
  res.sendFile( viewsPath + 'index.html');
});
app.use(express.static('src'));
app.use(router);
app.listen(app.get('port'), () => {
  console.log("Listening for connections to port 3000");
});