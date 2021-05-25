//EXERCICIO 1
const gerarEmail = (nome) => {
  const email = nome.toLowerCase().split(" ").join("_");
  return { nome, email: `${email}@trybe.com` };
};

const newEmployees = (gerarEmail) => {
  const employees = {
    id1: gerarEmail("Pedro Guerra"),
    id2: gerarEmail("Luiza Drumond"),
    id3: gerarEmail("Carla Paiva"),
  };
  return employees;
};
//console.log(newEmployees(gerarEmail));

//EXERCICIO 2
const checar = (meuNumero, numeroRandom) => {
  if (meuNumero === numeroRandom) {
    return "Parabéns você ganhou";
  } else {
    return "Tente novamente";
  }
};

const resultado = (meuNumero, func) => {
  const numeroR = Math.trunc(Math.random() * (5 - 1) + 1);
  return func(meuNumero, numeroR);
};
//console.log(resultado(2, checar));

//EXERCICIO 3
const rightAnswers = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const studentAnswers = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

function pontuacao(gabarito, respostasEstudante) {
  let pontos = null;
  for (let index = 0; index < gabarito.length; index += 1) {
    if (gabarito[index] === respostasEstudante[index]) {
      pontos += 1;
    } else if (respostasEstudante[index] === "N.A") {
      pontos += 0;
    } else {
      pontos -= 0.5;
    }
  }
  return pontos;
}

const corretor = (gabarito, respostasEstudante, func) =>
  func(gabarito, respostasEstudante);

//console.log(corretor(rightAnswers, studentAnswers, pontuacao));
