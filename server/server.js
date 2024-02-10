const express = require("express");
const app = express();

app.use(express.json());

app.get("/store/:storeName", (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put("/store/:storeName", (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

app.get("*", (req, res) => {
  res.send({ type: "pizza", token: "jwt", created: new Date() });
});

module.exports = app;
