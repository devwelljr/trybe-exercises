const geraNumber = require('./1.js');
//npm test 3.test.js

describe('Testes com geraNumber', () => {
  test('Função para receber 3 parâmetros e retornar sua multiplicação', () => {
    geraNumber.geraNumberD = jest
      .fn()
      .mockImplementation((a, b, c) => a * b * c);

    expect(geraNumber.geraNumberD(5, 2, 2)).toBe(20);
    expect(geraNumber.geraNumberD).toHaveBeenCalled();
    expect(geraNumber.geraNumberD).toHaveBeenCalledTimes(1);
    expect(geraNumber.geraNumberD).toHaveBeenCalledWith(5, 2, 2);
  });

  test('2° - Função que recebe um parâmetro e retorna seu dobro', () => {
    geraNumber.geraNumberD.mockReset();
    geraNumber.geraNumberD = jest
      .fn()
      .mockImplementation((a) => a * 2);

    expect(geraNumber.geraNumberD(4)).toBe(8);
    expect(geraNumber.geraNumberD).toHaveBeenCalled();
    expect(geraNumber.geraNumberD).toHaveBeenCalledTimes(1);
    expect(geraNumber.geraNumberD).toHaveBeenCalledWith(4);
  });
});
