const math = require('./math.js');
//npm test exercise2.test.js

test('Testa função multiplicar com retorno padrão de 10', () => {
  const mult = jest.spyOn(math, 'multiplicar').mockReturnValue(10);
  
  expect(mult(1, 1)).toBe(10);
  expect(mult).toHaveBeenCalled();
});