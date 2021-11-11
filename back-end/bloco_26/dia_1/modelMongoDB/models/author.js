const connection = require("./connection");

const getAll = async () => {
  return connection()
    .then((db) => db.collection("authors").find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
};

module.exports = {
  getAll,
};
