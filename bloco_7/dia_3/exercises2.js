//EXERCICIO 1
const assert = require("assert");

function addOne(array) {
  for (let index = 0; index < array.length; index += 1) {
    array[index] += 1;
  }
  return array;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof(addOne), "function");
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//EXERCICIO 2
const assert = require("assert");
function wordLengths(words) {
  let resposta = [];
  for (let index = 0; index < words.length; index += 1) {
    resposta.push(words[index].length);
  }
  return resposta;
}

const words = ["sun", "potato", "roundabout", "pizza"];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof(wordLengths), "function");
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

//EXERCICIO 3
const assert = require("assert");
function sumAllNumbers(numbers) {
  let soma = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
  }
  return soma;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof(sumAllNumbers), "function");
assert.strictEqual(output, expected);

//EXERCICIO 4
const assert = require("assert");
function findTheNeedle(words, palavra) {
  let posicao = null;
  for (let index = 0; index < words.length; index += 1) {
    if (words[index] == palavra) {
      posicao = index;
    } else if (posicao === null) {
      posicao = -1;
    }
  }
  return posicao;
}

let words = ["house", "train", "slide", "needle", "book"];
let expected = 3;
let output = findTheNeedle(words, "needle");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = 0;
output = findTheNeedle(words, "plant");
assert.strictEqual(output, expected);

words = ["plant", "shelf", "arrow", "bird"];
expected = -1;
output = findTheNeedle(words, "plat");
assert.strictEqual(output, expected);


