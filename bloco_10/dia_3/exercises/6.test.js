const fetchDog = require('./6.js');
//npm test 6.test.js

describe('testando a requisição', () => {
  const fetchDog = jest.fn();
  afterEach(fetchDog.mockReset);

  test('testando requisição caso a promisse resolva', async () => {
    fetchDog.mockResolvedValue('request sucess');

    fetchDog();
    expect(fetchDog).toHaveBeenCalled();
    expect(fetchDog).toHaveBeenCalledTimes(1);
    expect(fetchDog()).resolves.toBe('request sucess');
    expect(fetchDog).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promisse seja rejeitada', async () => {
    fetchDog.mockRejectedValue('request failed');

    expect(fetchDog).toHaveBeenCalledTimes(0);
    expect(fetchDog()).rejects.toMatch('request failed');
    expect(fetchDog).toHaveBeenCalledTimes(1);
  });
});
