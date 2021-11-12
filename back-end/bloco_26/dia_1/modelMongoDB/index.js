const express = require("express");

const Author = require("./models/author");

const Books = require("./models/book");

const app = express();


app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  res.status(200).json(author);
});

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get("/book/:id", async (req, res) => {
  const { id } = req.params;

  const books = await Books.findById(id);

  if (!books) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(books);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const books = await Books.getByAuthorId(id);

  if (!books) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(books);
});

app.get("/books", async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
