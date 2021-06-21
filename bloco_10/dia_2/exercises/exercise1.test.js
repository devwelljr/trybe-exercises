const uppercase = require('./exercise1.js');
//npm test exercise1.test.js

test('Test of uppercase', () => {
  uppercase('wellington', (string) => {
    expect(string).toBe('WELLINGTON');
    done();
  });
});