const math = require('./math.js');
//npm test exercise4.test.js

test('Testa função dividir com retorno padrão', () => {
  const div = jest.spyOn(math, 'dividir');
  div.mockReturnValue(15);
  div.mockReturnValueOnce(2);
  div.mockReturnValueOnce(5);
 
  expect(div(8, 4)).toBe(2);
  expect(div).toHaveBeenCalled();
  expect(div).toHaveBeenCalledWith(8, 4);

  expect(div(25, 5)).toBe(5);
  expect(div).toHaveBeenCalledTimes(2);
  expect(div).toHaveBeenCalledWith(25, 5);

  expect(div(30, 2)).toBe(15);
  expect(div).toHaveBeenCalledTimes(3);
  expect(div).toHaveBeenCalledWith(30, 2);
});
