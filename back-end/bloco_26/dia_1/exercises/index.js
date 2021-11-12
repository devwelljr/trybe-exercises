const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routers/userRouter");

const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
