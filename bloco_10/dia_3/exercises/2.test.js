const geraNumber = require('./1.js');
//npm test 2.test.js

test('Testa função geraNumber com nova implementação', () => {
  geraNumber.geraNumberD = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(geraNumber.geraNumberD(4, 2)).toBe(2);
  expect(geraNumber.geraNumberD).toHaveBeenCalled();
  expect(geraNumber.geraNumberD).toHaveBeenCalledTimes(1);
  expect(geraNumber.geraNumberD).toHaveBeenCalledWith(4, 2);

  expect(geraNumber.geraNumberD(4, 2)).toBe(undefined);
  expect(geraNumber.geraNumberD).toHaveBeenCalledTimes(2);
});
