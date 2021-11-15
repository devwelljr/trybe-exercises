const connection = require("./connection");

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findAddressByCep = async (cepToSearch) => {
  const treatedCep = cepToSearch.replace("-", "");

  const query =
    "SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?";

  const result = await connection
    .execute(query, [treatedCep])
    .then(([results]) => (results.length ? results[0] : null));

  if (!result) return null;

  return getNewCep(result);
};

const allCEPs = async () => {
  const query = "SELECT * FROM ceps;";

  const result = await connection.execute(query);

  if (!result) return null;

  return result;
};

module.exports = {
  findAddressByCep,
  allCEPs,
};
