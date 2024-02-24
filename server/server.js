const express = require('express');
const app = express();
const stores = {};

app.use(express.json());

app.get('/store', (req, res) => {
  res.send({ store: stores });
});

app.get('/store/:storeName', (req, res) => {
  res.send(stores[req.params.storeName]);
});

app.post('/store/:storeName', (req, res) => {
  let body = req.body ?? {};
  body.date = new Date().toISOString();
  body.name = req.params.storeName;
  stores[req.params.storeName] = body;
  res.send({ store: stores });
});

module.exports = app;
