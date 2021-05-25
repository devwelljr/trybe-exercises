//EXERCICIO 1
const assert = require("assert");
const greetPeople = (people) => {
  let greeting = "Hello ";
  let resposta = [];
  for (const person in people) {
  resposta.push(greeting += people[person]);
  }
  return resposta;
};

const parameter = ["Irina", "Ashleigh", "Elsa"];
const result = ["Hello Irina", "Hello Ashleigh", "Hello Elsa"];
console.log(greetPeople(parameter))
assert.deepStrictEqual(greetPeople(parameter), result);