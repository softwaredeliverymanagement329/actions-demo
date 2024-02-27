const express = require('express');
const app = express();
const stores = [];
const users = [];

app.use(express.json());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.delete('/store', (req, res) => {
  stores.length = 0;
  res.send({ store: stores });
});

apiRouter.get('/store', (req, res) => {
  res.send({ store: stores });
});

apiRouter.get('/store/:storeName', (req, res) => {
  const store = stores.find((store) => store.name === req.params.storeName);
  res.send(store);
});

apiRouter.put('/store/:storeName', (req, res) => {
  let update = req.body ?? {};
  let store = stores.find((store) => store.name === req.params.storeName);
  if (store) {
    store = { ...store, ...update };
    res.status(200).send(store);
  } else {
    res.status(404).send({ error: 'unknown store' });
  }
});

apiRouter.post('/store/:storeName', (req, res) => {
  let newStore = req.body ?? {};
  newStore.date = new Date().toISOString();
  newStore.name = req.params.storeName;
  stores.push(newStore);
  res.send({ store: stores });
});

apiRouter.post('/user/:userName', (req, res) => {
  let newUser = req.body ?? {};
  newUser.date = new Date().toISOString();
  newUser.name = req.params.userName;
  users.push(newUser);
  res.send({ user: users });
});

module.exports = app;
