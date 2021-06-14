const { compara, obj1, obj2, obj3 } = require('./exercise5');
//npm test exercise5.test.js

test('Compare dois objetos para verificar se são idênticos ou não', () => {
  expect(compara(obj1, obj2)).toBe(true)
});