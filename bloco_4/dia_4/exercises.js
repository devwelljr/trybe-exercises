//EXERCICIOS PARTE 1

let infoMargarida = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let infoPatinhas = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

// Exercicio 1
// let infoMargarida = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

//   console.log(`Bem-vinda, ${infoMargarita.personagem}.`);

// Exercicio 2
// console.log(infop.recorrente);

// Exercicio 3
// for(let index2 in infop){
//     console.log(index)
// }

// Exercicio 4
// for(let index3 in infop){
//     console.log(infop[index]);
// }

// Exercicio 5
// for (let index4 in infoMargarida) {
//   if (infoMargarida[index4] === infoPatinhas[index4]) {
//     console.log("Ambos recorrentes");
//   } else {
//     console.log(infoPatinhas[index4] + " e " + infoMargarida[index4]);
//   }
// }

//EXERCICIOS PARTES 2

//Exercicio 1
// let palavra = "arara";

// function palindromo(palavra) {
//   let palavraC = palavra.split("").reverse().join("");
//   if (palavraC === palavra) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(palindromo(palavra));

//Exercicio 2

// let array = [2, 3, 6, 7, 10, 1];

// function maiorIndice(array) {
//   let maior = array[0];
//   let indice = 0;
//   for (let index = 1; index < array.length; index += 1) {
//     if (array[index] > maior) {
//       indice = index;
//     }
//   }
//   return indice;
// }
// console.log(maiorIndice(array));

//Exercicio 3

// let array = [2, 4, 6, 7, 10, 0, -3];

// function menorIndice(array) {
//   let indice = 0;
//   for (let index in array) {
//     if (array[index] < array[indice]) {
//       indice = index;
//     }
//   }
//   return indice;
// }

// console.log(menorIndice(array));

//Exercicio 4

// function maisCaracteres(nomes){
//     let maiorNome = nomes[0];
//    for(let index = 0; index < nomes.length; index+=1){
//        if(maiorNome.length < nomes[index].length){
//            maiorNome = nomes[index];
//        }
//    }
//    return maiorNome;
// }
// console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Exercicio 5

// function numeroRepete(numeros) {
//   let contRepeticao = 0;
//   let num = 0;
//   let indice = 0;
//   for (let index in numeros) {
//     let contNumero = 0;
//     num = numeros[index];
//     for (index2 in numeros) {
//       if (num === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepeticao) {
//       contRepeticao = contNumero;
//       indice = index;
//     }
//   }
//   return numeros[indice];
// }
// console.log(numeroRepete([2, 3, 2, 5, 8, 2, 3, 3, 3]));

//Exercicio 6

// function somatorio(N) {
//   let resultado = 0;
//   for (let index = 0; index <= N; index += 1) {
//     resultado += index;
//   }
//   return resultado;
// }
// console.log(somatorio(5));

//Exercicio 7

// function final(word, ending){
//   let wordC = word.split("").reverse().join("");
//   let wordCortada = wordC.split("", ending.length).reverse().join("");
//   if (wordCortada === ending) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(final('trybe', 'be'));

//BONUS

function algarismosRomanos(romanos) {
  let letras = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let resultado = 0;
  let array = [];

  for (let index in romanos) {
    array[index] = letras[romanos[index]];
  }
  for (let i in array) {
    if (array[i] < array[i + 1]) {
      resultado = array[i + 1] -= array[i];
    } else {
      resultado += array[i];
    }
  }
  return resultado;
}
console.log(algarismosRomanos("IX"));
