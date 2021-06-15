const searchEmployee = require('./bonus.js');
//npm test bonus.test.js

describe('Testes função searchEmployee', () => {
  it('Testa se a função é uma função', () => {
    expect(typeof searchEmployee).toEqual('function');
  });
})