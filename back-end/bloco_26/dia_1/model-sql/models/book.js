const connection = require("./connection");

const getAll = async () => {
  const [books] = await connection.execute(
    "SELECT title FROM model_example.books;"
  );
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT * FROM model_example.books WHERE author_id=${id};`
  );
  return books;
};

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;'

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
}

module.exports = {
  getAll,
  getByAuthorId,
  getById,
};
