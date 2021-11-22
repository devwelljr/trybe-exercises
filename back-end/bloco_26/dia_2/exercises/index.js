require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const Cep = require('./controllers/cepController');

const app = express();

app.use(bodyParser.json());

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.get("/cep/:cep", Cep.findAddressByCep);

// app.get("/cep", Cep.allCEPs);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
