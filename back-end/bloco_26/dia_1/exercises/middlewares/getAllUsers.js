const UserModel = require("../models/user");

const getAllUsers = async (_req, res) => {
  const users = await UserModel.getAll();

  if(!users) return res.status(404).send([]);

  res.status(200).json(users);
};

module.exports = getAllUsers;
