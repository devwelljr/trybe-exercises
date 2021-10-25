const express = require("express");
const rescue = require("express-rescue");
const bodyParser = require("body-parser");
const { getSimpsons, setSimpsons } = require("./fs-simpsons");

const app = express();

app.use(bodyParser.json());

// EXERCICIO 1
app.get("/ping", function (req, res) {
  res.json({ message: "pong" });
});

// EXERCICIO 2
app.post("/hello", function (req, res) {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

// EXERCICIO 3
app.post("/greetings", function (req, res) {
  const { name, age } = req.body;

  if (age > 17) res.status(200).json({ message: `Hello, ${name}!` });

  res.status(401).json({ message: "Unauthorized" });
});

// EXERCICIO 4
app.put("/users/:name/:age", function (req, res) {
  const { name, age } = req.body;
  res
    .status(200)
    .json({ message: `Hello, ${name} e você tem ${age} anos de idade` });
});

// EXERCICIO 6
app.get(
  "/simpsons",
  rescue(async (req, res) => {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons);
  })
);

// EXERCICIO 7
app.get(
  "/simpsons/:id",
  rescue(async (req, res) => {
    const { id } = req.params;
    const simpsons = await getSimpsons();

    const simpson = simpsons.find((s) => s.id === id);

    if (!simpson) return res.status(404).json({ message: "simpson not found" });

    return res.status(200).json(simpson);
  })
);

// EXERCICIO 8
app.post(
  "/simpsons",
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: "id already exists" });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
