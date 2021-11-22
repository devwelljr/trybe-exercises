const Cep = require("../models/cepModel");

const CEP_REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    };
  }

  const cep = await Cep.findAddressByCep(searchedCep);

  if (!cep) {
    return {
      error: {
        code: "notFound",
        message: "CEP não encontrado",
      },
    };
  }

  return cep;
};

const allCEPs = async () => {
  const ceps = await Cep.allCEPs();

  if (!ceps)
    return {
      error: {
        code: "notFound",
        message: "sem CEPs encontrados",
      },
    };

  return ceps;
};

module.exports = {
  findAddressByCep,
  allCEPs,
};
