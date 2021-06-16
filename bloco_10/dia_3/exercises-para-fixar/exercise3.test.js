const math = require('./math.js');
//npm test exercise3.test.js

test('Testa função soma implementada', () => {
  const sum = jest.fn(math, 'somar').mockImplementation((a, b) => a + b);

  expect(sum(1, 1)).toBe(2);
  expect(sum).toHaveBeenCalledWith(1, 1);
  expect(sum).toHaveBeenCalledTimes(1);
});
