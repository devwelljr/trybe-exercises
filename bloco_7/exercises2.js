//EXERCICIO 1
const numero = 4;

function fatorial(numero) {
  let resultado = 0;
  for (let index = 0; index < numero; index += 1) {
    let fat = numero * index;
    resultado = fat + resultado;
  }
  console.log(resultado);
}

fatorial(numero);

//EXERCICIO 2
const frase = "Antônio foi no banheiro e não sabemos o que aconteceu";
let fraseDividida = frase.split(" ");
let maior = "";

function achaMaior(frase) {
  for (let i of fraseDividida) {
    if (i.length > maior.length) {
      maior = i;
    }
  }
  console.log(maior);
}
achaMaior(fraseDividida);

//EXERCICIO 3   
