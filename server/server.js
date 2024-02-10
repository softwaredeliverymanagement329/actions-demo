const express = require("express");
const createJwt = require("./generate");
const app = express();

app.get("*", (req, res) => {
  res.send(createJwt());
});

app.listen(3000);
