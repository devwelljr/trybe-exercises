let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* 1° exercicio
for(let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
} */

/* 2° exercicio
let resultado = 0;

for(let index = 0; index < numbers.length; index += 1){
    resultado += numbers[index];
}

console.log(`A soma é: ${resultado}`); */

/* 3° exercicio 
 let soma = 0;
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    resultado = soma / numbers.length;
}

console.log(`A media é: ${resultado}`); */

/* 4 °exercicio
let soma = 0;
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
    resultado = soma / numbers.length;
}
if(resultado > 20){
    console.log('Valor maior que 20.');
}else{
    console.log('Valor menor ou igual a 20.')
}

console.log(resultado); */

/* 5° exercicio
let maiorNumero = 0;

for (let index = 0; index < numbers.length; index += 1) {
     if(numbers[index] > maiorNumero){
         maiorNumero = numbers[index];
     }
}
console.log(`Este é o maior número: ${maiorNumero}`); */

/* 6° exercicio
let totalImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 != 0){
        totalImpares += 1;
    }
}

console.log(`O total de números ímpares é: ${totalImpares}`); */

/* 7° exercicio

let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (menorNumero > numbers[index]) {
    menorNumero = numbers[index];
  }
}
console.log(`Este é o menor número: ${menorNumero}`); */

/* 8° exercicio
let numeros = [];

for(let index = 0; index <= 25; index += 1){
   numeros.push(index)
}
console.log(`Números de 1 a 25: ${numeros}`) */

// 9° exercicio
let numeros = [];
let divisão = 0;

for(let index = 0; index <= 25; index += 1){
   numeros.push(index)
   divisão = numeros[index] / 2;
   console.log(`Divisão do número ${index} por 2: ${divisão}`)
}
