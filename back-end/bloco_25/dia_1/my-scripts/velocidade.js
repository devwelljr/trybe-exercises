const readline = require("readline-sync");

// EXERCICIO 6
const velocidadeMedia = () => {
  const distancia = readline.questionInt("Qual distancia percorrida? ");
  const tempo = readline.questionInt("Qual tempo gasto? ");
  let vm = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média: ${vm} m/s`);
  return null;
};

module.exports = velocidadeMedia;
