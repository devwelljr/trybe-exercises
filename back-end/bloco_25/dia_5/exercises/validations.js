const userValidate = (req, res, next) => {
  const { user } = req.body;

  if (user.length < 3) return res.status(400).json({ message: "invalid data" });

  next();
};

const emailValidate = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes("@") || !email.includes(".com")) {
    return res.status(400).json({ message: "invalid data" });
  }

  next();
};

const passValidate = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 4 || password.length > 8) {
    return res.status(400).json({ message: "invalid data" });
  }

  next();
};

const validToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  const regex = /^[a-zA-Z0-9]{12}$/;

  if(!token || !regex.test(token)) return res.status(401).json({ message: 'invalid token' });

  next();
};

module.exports = { userValidate, emailValidate, passValidate, validToken };
