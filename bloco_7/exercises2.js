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

//EXERCICIO 3 no arquivo exercicio3parte2.html

//EXERCICIO 4
let string = "Tryber x aqui!";
let skills = ['Javascript', 'HTML', 'CSS', 'react', 'python'];
let skillsArrumadas = skills.sort();

function substituiX(palavra) {
  let stringDividida = string.split(" ");
  for (let index = 0; index < stringDividida.length; index += 1) {
    if (stringDividida[index] == 'x') {
      stringDividida[index] = palavra;
    }
  }
  let fraseFinal = stringDividida.join(' ');
  return fraseFinal;
}
console.log(substituiX("wellington"));

function addSkills () {
  let frase = '';
  frase = `${substituiX('wellington')} Minhas cinco principais habilidades são: 
  ${skillsArrumadas}`;
  return frase;
}
console.log(addSkills());
