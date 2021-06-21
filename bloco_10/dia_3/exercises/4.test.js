const funcs = require('./4.js');
//npm test 4.test.js

describe('Testa as 3 funções', () => {
  test('Nova implementação do Maiusculo', () => {
  funcs.maiusculo = jest.fn().mockImplementation((string) => string.toLowerCase());

  expect(funcs.maiusculo('STRING')).toBe('string');
  expect(funcs.maiusculo).toHaveBeenCalled();
  expect(funcs.maiusculo).toHaveBeenCalledTimes(1);
  expect(funcs.maiusculo).toHaveBeenCalledWith('STRING');
  });

  test('Nova implementação do primeiraLetra', () => {
  funcs.primeiraLetra = jest.fn().mockImplementation((string) => string[string.length - 1]);

  expect(funcs.primeiraLetra('string')).toBe('g');
  expect(funcs.primeiraLetra).toHaveBeenCalled();
  expect(funcs.primeiraLetra).toHaveBeenCalledTimes(1);
  expect(funcs.primeiraLetra).toHaveBeenCalledWith('string');
  });

  test('Nova implementação do juntarStrings', () => {
  funcs.juntarStrings = jest.fn().mockImplementation((a, b, c) => a.concat(b, c));

  expect(funcs.juntarStrings('jest', ' é', ' maravilhoso')).toBe('jest é maravilhoso');
  expect(funcs.juntarStrings).toHaveBeenCalled();
  expect(funcs.juntarStrings).toHaveBeenCalledTimes(1);
  expect(funcs.juntarStrings).toHaveBeenCalledWith('jest', ' é', ' maravilhoso')
  });
});