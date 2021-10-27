const express = require("express");
const rescue = require("express-rescue");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const userRouter = require("./user");
const { validToken } = require("./validations");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get(
  "/btc/price",
  validToken,
  rescue(async (_req, res) => {
    const result = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
    );

    res.status(200).json(result.data);
  })
);

app.use("/user", userRouter);

app.listen(3001, () => console.log("Run server http://localhost:3001"));
