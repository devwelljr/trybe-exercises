module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
 return res
      .status(401)
      .json({ message: 'É necessário usuário e senha para fazer login' }); 
}

if (typeof username !== 'string' || typeof password !== 'string') {
  return res
       .status(401)
       .json({ message: 'É necessário usuário e senha seja string' }); 
 }

  next();
};
