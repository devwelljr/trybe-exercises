const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

app.get("/recipes", function (req, res) {
  res.json(recipes);
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});

// EXERCICIOS 1 E 2 DE ESTRUTURANDO API
const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

app.get("/drinks", function (req, res) {
  res.json(drinks);
});

app.get("/drinksOrdened", function (req, res) {
  const ordenado = drinks.sort((a, b) => a.name.localeCompare(b.name));
  res.json(ordenado);
});

// EXERCICIO 1 PARAMETROS DE ROTA
app.get("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: "drink not found!" });

  res.status(200).json(drink);
});

// EXERCICIOS 1 E 2 DE QUERY STRING
app.get("/recipes/search", function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= parseInt(minPrice)
  );
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});


// EXERCICIOS 1 E 2 DE BODY
app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drink created successfully!'});
});

app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// EXERCICIOS 1 E 2 DE ATT E DELETE
app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'drink not found!' });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});
