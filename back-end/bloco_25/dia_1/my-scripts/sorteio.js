const readline = require("readline-sync");

// EXERCICIO 7
const sorteio = () => {
  const random = parseInt(Math.random() * 10);
  const resposta = readline.questionInt(
    'Digite um número entre 0 e 10: '
  );

  if(random === resposta) {
    console.log("Parabéns, número correto");
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${random}`);
  };

  const novamente = readline.question(
    'Deseja jogar novamente? (Digite s para sim, e n para não)'
  );

  switch(novamente) {
    case "s":
      sorteio();
    break;
    case "n":
      console.log('tchau!');
    break;
    default:
      console.log("digitou errado");
  };
};

module.exports = sorteio;
