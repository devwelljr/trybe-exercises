const express = require("express");

const Author = require("./models/author");

const Books = require("./models/book");

const app = express();

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: 'Book not found' })

  res.status(200).json(book);
});

app.get("/books", async (req, res) => {
  const { id } = req.query;

  const books = (id)
  ? await Books.getByAuthorId(id)
  : await Books.getAll();

  res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
