const funcs = require('./4.js');
//npm test 5.test.js

test('Nova implementação do Maiusculo', () => {
  funcs.maiusculo = jest.spyOn(funcs, 'maiusculo').mockImplementation((string) => string.toLowerCase());

  expect(funcs.maiusculo('STRING')).toBe('string');
  expect(funcs.maiusculo).toHaveBeenCalled();
  expect(funcs.maiusculo).toHaveBeenCalledTimes(1);
  expect(funcs.maiusculo).toHaveBeenCalledWith('STRING');

  funcs.maiusculo.mockRestore();

  expect(funcs.maiusculo('string')).toBe('STRING');
});
