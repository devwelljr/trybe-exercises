const math = require('./math.js');
//npm test exercise5.test.js

test('Testando subtrair e sua chamada', () => {
  const sub = jest.spyOn(math, 'subtrair');
  sub.mockImplementation((a, b) => a + b);
  sub.mockReturnValue(20);

  expect(sub(10, 10)).toBe(20);
  expect(sub).toHaveBeenCalledTimes(1);
  expect(sub).toHaveBeenCalledWith(10, 10);

  sub.mockRestore();
  sub.mockReturnValue(10);

  expect(sub(15, 5)).toBe(10);
  expect(sub).toHaveBeenCalledTimes(1);
  expect(sub).toHaveBeenCalledWith(15, 5);
});
