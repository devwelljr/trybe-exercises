const Books = require("../models/Books");

const getAll = async () => await Books.getAll();

const findById = async (id) => {
  const book = await Books.findById(id);

  if (!book) {
    return {
      error: {
        code: "notFound",
        message: `Não foi possível encontrar um livro com o id: ${id}`,
      },
    };
  }

  return book;
};

module.exports = {
  getAll,
  findById,
};
