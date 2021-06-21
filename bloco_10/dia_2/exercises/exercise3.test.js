const { findUserById, getUserName } = require('./exercise2.js');
//npm test exercise3.test.js

describe('When user id exist', () => {
  it('Testing user id exist', async () => {
    await expect(getUserName(5)).resolves.toEqual('Paul');
  });
});

describe('When user id not exists', () => {
  it('Testing user id not exists', async () => {
    await expect(getUserName(1)).rejects.toEqual({
      error: 'User with 1 not found.',
    });
  });
});
