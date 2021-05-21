//EXERCICIO 1
// const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

// //1.1
// assert.strictEqual(sum(4, 5), 9, '4 + 5 = 9');

// //1.2
// assert.strictEqual(sum(0, 0), 0, '0 + 0 = 0');

// //1.3 e 1.4
// assert.strictEqual(sum(4, '5'), 9);

//EXERCICIO 2
// const assert = require("assert");

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// //2.1
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
// //2.2
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
// //2.3
// assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 4), [1, 2, 3, 4]);
// //2.4
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

//EXERCICIO 3
const assert = require("assert");

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

//3.1
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
//3.2
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
//3.3

