//EXERCICIO 1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  if (arr.some((nome) => nome === name)) {
      return true;
  }
  return false;
}

//console.log(hasName(names, 'Bruna'))

//EXERCICIO 2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];


  const verifyAges = (arr, minimumAge) => {
    //Adicione seu código aqui
    return arr.every((elemento) => elemento.age >= minimumAge )
  }
  
  console.log(verifyAges(people, 18));