const geraNumber = require('./1.js');
//npm test 1.test.js

test('Testa função geraNumber', () => {
  const geraNumber = jest.fn().mockReturnValue(10);

  expect(geraNumber()).toBe(10);
  expect(geraNumber).toHaveBeenCalled();
  expect(geraNumber).toHaveBeenCalledTimes(1);
});