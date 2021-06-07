//EXERCICIO 1
const numbers = [19, 21, 31, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  const resposta = numbers.find(
    (number) => number % 3 === 0 && number % 5 === 0
  );
  return resposta;
};

//console.log(findDivisibleBy3And5());

//EXERCICIO 2
const names = ["João", "Irene", "Fernando", "Maria"];

const findNameWithFiveLetters = () => {
  // Adicione seu código aqui:
  const cincoLetras = names.find((elemento) => elemento.length === 5);
  return cincoLetras;
};

//console.log(findNameWithFiveLetters());

//EXERCICIO 3
const musicas = [
  { id: "31031685", title: "Partita in C moll BWV 997" },
  { id: "31031686", title: "Toccata and Fugue, BWV 565" },
  { id: "31031687", title: "Chaconne, Partita No. 2 BWV 1004" },
];

function findMusic(id) {
  // Adicione seu código aqui
  const encontrar = musicas.find((elemento, index, array) => {
    if (elemento.id === id) {
      return array[index];
    }
  });
  return encontrar;
}

//console.log(findMusic("31031685"));
