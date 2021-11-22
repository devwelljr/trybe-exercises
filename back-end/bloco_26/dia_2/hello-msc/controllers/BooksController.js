const rescue = require("express-rescue");
const service = require("../services/Book");

const getAll = rescue(async (_req, res) => {
  const books = await service.getAll();

  res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const book = await service.findById(id);

  if (book.error) return next(book.error);

  res.status(200).json(book);
});

module.exports = {
  getAll,
  findById,
}
