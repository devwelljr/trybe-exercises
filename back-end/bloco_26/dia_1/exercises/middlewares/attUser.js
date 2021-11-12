const UserModel = require("../models/user");

const attUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;

  await UserModel.attByID(id, {
    firstName,
    lastName,
    email,
    password,
  });

  res.status(200).json({
    id: "1837983326d5cd7ad6da5707a2bd11c5",
    firstName: "Calebe",
    lastName: "Junior",
    email: "calebe.junior@gmail.com",
  });
};

module.exports = attUser;
