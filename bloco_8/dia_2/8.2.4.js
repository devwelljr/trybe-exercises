//EXERCICIO 1
const numbers = [19, 21, 31, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const resposta = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return resposta;
};

console.log(findDivisibleBy3And5());
