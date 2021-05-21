//EXEMPLO 1
const assert = require("assert"); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70

//EXEMPLO 2
const assert = require("assert");

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.equal(expected, 3, "Nove dividido por três é igual a três");

//EXEMPLO 3
const assert = require("assert");

function add(a, b) {
  return a + b;
}

const expected = add(2, 2);

assert.ok(expected === 3, "Um mais dois é igual a três"); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, "Um mais dois é igual a três"); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(
  expected,
  4,
  "Um mais dois é igual a três (e não quatro!)"
); // Checa se o primeiro e segundo argumentos são diferentes (!==)

//EXEMPLO 4
const assert = require("assert");

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(
  list1,
  list2,
  "Erro: list1 e list2 não são estritamente iguais"
);

const person1 = { name: "john", age: 21 };
const person2 = { name: "john", age: 21 };

assert.deepStrictEqual(
  person1,
  person2,
  "Erro: person1 e person2 não são estritamente iguais"
);

const person3 = { name: "john", age: 19 };

assert.notDeepStrictEqual(
  person1,
  person3,
  "Erro: os valores dos objetos são estritamente iguais"
);

//EXEMPLO 5
function division(x, y) {
  return x / y;
}

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => { division(10, 0); }, /^Error: parameter y must not be 0$/); // OK
