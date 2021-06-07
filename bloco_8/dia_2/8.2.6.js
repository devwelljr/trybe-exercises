const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 16 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

// CRESCENTE
people.sort((elementoA, elementoB) => elementoA.age - elementoB.age);

//DECRESCENTE
people.sort((elementoA, elementoB) => elementoB.age - elementoA.age);

console.log(people);
