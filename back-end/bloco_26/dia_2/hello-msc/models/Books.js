const { ObjectId } = require("mongodb");
const connection = require("./connection");

const getAll = async () => {
  return connection()
    .then((db) => db.collection("books").find().toArray())
    .then((books) =>
      books.map(({ _id, title, author_id }) => {
        return {
          id: _id,
          title,
          author_id,
        };
      })
    );
};

const getByAuthorId = async (id) => {
  const books = await connection().then((db) =>
    db.collection("books").findOne({ author_id: Number(id) })
  );

  return books;
};

const findById = async (id) => {
  const book = await connection().then((db) =>
    db.collection("books").findOne(new ObjectId(id))
  );

  if (!book) return null;

  return book;
};

const create = async ({ firstName, lastName, email, password }) => {
  return connection().then((db) =>
    db.collection("books").insertOne({ firstName, lastName, email, password })
  );
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};
