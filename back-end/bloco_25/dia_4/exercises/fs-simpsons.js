const fs = require("fs/promises");

// EXERCICIO 5
const getSimpsons = async () => {
  const simpsons = await fs.readFile("./simpsons.json", "utf-8");
  const jsonSimpsons = await JSON.parse(simpsons);

  return jsonSimpsons;
};

const setSimpsons = async () => {
  return fs.writeFile("./simpsons.json", JSON.stringify(newSimpsons));
};

module.exports = { getSimpsons, setSimpsons };
