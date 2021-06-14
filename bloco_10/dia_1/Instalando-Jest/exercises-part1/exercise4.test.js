const myFizzBuzz = require('./exercise4');
//npm test ./exercise4.test.js

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz"', () => {
  it('número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(7)).toBe(7);
  });

  it('parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('7')).toBe(false);
  });
});