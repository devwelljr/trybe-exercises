const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  let funcaoReduce = (acc, atual) => {
    let separado = atual.split('');
    for (let index = 0; index < separado.length; index += 1) {
      if (separado[index] === 'a' || separado[index] === 'A') {
        acc += 1;
      }
    }
    return acc;
  };
  const reduzir = names.reduce(funcaoReduce, 0);
  return reduzir;
}

assert.deepStrictEqual(containsA(), 20);
