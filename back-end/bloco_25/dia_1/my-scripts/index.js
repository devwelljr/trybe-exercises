const readline = require("readline-sync");

const escolha = () => {
  const imc = require("./imc");
  const velocidade = require("./velocidade");
  const sorteio = require("./sorteio");

  const resposta = readline.question(
    "Digite um script sendo: Calcular IMC, Calcular velocidade média, Jogo de adivinhação"
  );

  switch (resposta) {
    case "Calcular IMC":
      imc();
      break;
    case "Calcular velocidade média":
      velocidade();
      break;
    case "Jogo de adivinhação":
      sorteio();
      break;
    default:
      console.log("digitou errado");
  }
};

escolha();
