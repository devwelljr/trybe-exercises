const connect = require('./connection');

const registerUser = async (username, password) => {
  const db = await connect();
  const userCreated = await db.collection('users').insertOne({ username, password });
  return userCreated.ops[0].username;
};

const findUser = async (username) => {
  const db = await connect();
  const userData = await db.collection('users').findOne({ username });
  return userData;
};

const allUsers = async () => {
  const db = await connect();
  const users = await db.collection('users').find({});
  return users;
};

module.exports = { registerUser, findUser, allUsers };
