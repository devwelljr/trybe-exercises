const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  let funcaoReduce = (acc, atual) => acc.concat(atual);

  const reduzido = arrays.reduce(funcaoReduce, []);
  return reduzido;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
