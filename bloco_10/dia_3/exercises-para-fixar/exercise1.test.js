const math = require('./math.js');
//npm test exercise1.test.js

test('Testando subtrair e sua chamada', () => {
  const sub = jest.fn(math, 'subtrair').mockImplementation((a, b) => a - b);

  math.subtrair(2, 2);
  expect(sub(2, 2)).toBe(0);
  expect(sub).toHaveBeenCalledTimes(1);
});
