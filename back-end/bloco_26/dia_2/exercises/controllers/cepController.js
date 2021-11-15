const rescue = require("express-rescue");
const service = require("../services/cepService");

const findAddressByCep = async (req, res) => {
  const { cep } = req.params;

  const address = await service.findAddressByCep(cep);

  if (address.error) {
    return res.status(404).send(address.error);
  }

  return res.status(200).json(address);
};

const allCEPs = async (_req, res) => {
  const ceps = await service.allCEPs();

  if (ceps.error) {
    return next(address.error);
  }

  return res.status(200).json(ceps);
};

module.exports = {
  findAddressByCep,
  allCEPs,
};
