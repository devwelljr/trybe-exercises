const connection = require("./connection");
const { ObjectId } = require('mongodb');

const getAll = async () => {
  return connection()
    .then((db) => db.collection("authors").find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) => {
        return {
          id: _id,
          firstName,
          middleName,
          lastName,
        };
      })
    );
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection().then((db) =>
    db.collection("authors").findOne(new ObjectId(id))
  );

  if (!authorData) return null;

  return authorData;
};

module.exports = {
  getAll,
  findById,
};
