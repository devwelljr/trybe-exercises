const connection = require("./connection");
const { ObjectId } = require('mongodb');

function create({ firstName, lastName, email, password }) {
  return connection().then((db) =>
    db.collection("users").insertOne({ firstName, lastName, email, password })
  );
}

const getAll = async () => {
  const users = await connection().then((db) =>
    db.collection("users").find().toArray()
  );

  return users;
};

const findByID = async (id) => {
  const user = await connection().then((db) =>
    db.collection("users").findOne(ObjectId(id)).toArray()
  );

  return user;
};

const attByID = async (id, { firstName, lastName, email, password }) => {
  return connection().then((db) =>
    db.collection("users").updateOne(ObjectId(id), { firstName, lastName, email, password })
  );
};

module.exports = {
  create,
  getAll,
  findByID,
  attByID,
};
