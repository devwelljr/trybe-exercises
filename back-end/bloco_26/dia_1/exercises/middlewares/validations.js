const firstNameValidate = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) {
    return res.status(400).send({ message: 'O campo "firstName" é obrigatório' });
  }

  next();
};

const lastNameValidate = (req, res, next) => {
  const { lastName } = req.body;

  if (!lastName) {
    return res.status(400).send({ message: 'O campo "lastName" é obrigatório' });
  }

  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;

  if (!email || email.length === 0) {
    return res.status(400).send({ message: 'O campo "email" é obrigatório' });
  }

  if (!email.includes('@') && !email.includes('.com')) {
    return res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  next();
};

const passValidate = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length === 0) {
    return res.status(400).send({ message: 'O campo "password" é obrigatório' });
  }

  if (typeof(password) !== "string") {
    return res.status(400).send({ message: 'O campo "password" tem que ser string' });
  }

  if (password.length < 6) {
    return res.status(400).send({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};

module.exports = {
  firstNameValidate,
  lastNameValidate,
  emailValidate,
  passValidate,
}
