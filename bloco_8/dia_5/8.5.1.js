// Faça uma lista com as suas frutas favoritas
const specialFruit = ['uva', 'morango', 'maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'leite em pó', 'aveia'];

const fruitSalad = (specialFruit, additionalItens) => {
  let mix = [...specialFruit, ...additionalItens];
  return mix;
};

console.log(fruitSalad(specialFruit, additionalItens));