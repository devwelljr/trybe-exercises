/* eslint-disable max-lines-per-function */
const jwt = require('jsonwebtoken');
const loginModel = require('../models/loginModel');

const segredo = 'seusecretdetoken';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, segredo);

    const user = await loginModel.findUser(decoded.username);

    if (!user) {
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuário do token.' });
    }

    const { username, admin } = user;

    res.status(200).json({ username, admin });

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
