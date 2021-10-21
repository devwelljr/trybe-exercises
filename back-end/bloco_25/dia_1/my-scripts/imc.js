const readline = require("readline-sync");

// EXERCICIO 1
// const peso = 100;
// const altura = 1.9;
// const imc = () => (peso / (altura ** 2)).toFixed(2);

// EXERCICIO 3 e 4
// const imc = () => {
//   const peso = readline.questionFloat('Qual seu peso? ');
//   const altura = readline.questionFloat('Qual sua altura? ');
//   return (peso / (altura ** 2)).toFixed(2);
// };

// EXERCICIO 5
const imc = () => {
  const peso = readline.questionFloat("Qual seu peso? ");
  const altura = readline.questionFloat("Qual sua altura? ");
  let imc = (peso / altura ** 2).toFixed(2);
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade graus III e IV');
  }

  return null;
};

module.exports = imc;
