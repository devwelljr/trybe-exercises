const UserModel = require("../models/user");

const findById = async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findByID(id);

  if (!users)
    return res.status(404).send([
      {
        error: true,
        message: "Usuário não encontrado",
      },
    ]);

  res.status(200).json(user);
};

module.exports = findById;
