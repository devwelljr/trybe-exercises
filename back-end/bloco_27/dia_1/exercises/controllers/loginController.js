const jwt = require('jsonwebtoken');
const loginModel = require('../models/loginModel');

const secret = 'seusecretdetoken';

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    await loginModel.registerUser(username, password);

    let payload;

    if (password === 's3nh4S3gur4???') {
      payload = { username: req.body.username, admin: true };
    } 

    payload = { username: req.body.username, admin: false };

    const token = jwt.sign(payload, secret, {
      expiresIn: '1h',
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao salvar o usuário no banco',
      error: err.message,
    });
  }
};

const allUsers = async (_req, res) => {
  const users = await loginModel.allUsers();

  res.status(200).json({ users });
};

module.exports = { createUser, allUsers };
