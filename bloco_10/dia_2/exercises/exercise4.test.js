const getRepos = require('./exercise4.js');
//npm test exercise4.test.js

describe('Test API contains repository', () => {
  const apiLink = 'https://api.github.com/orgs/tryber/repos';
  it('testing 1° repository', () => {
  return getRepos(apiLink).then(result => expect(result).toContain('sd-01-week4-5-project-todo-list'));
  });
  it('testing 2° repository', () => {
  return getRepos(apiLink).then(result => expect(result).toContain('sd-01-week4-5-project-meme-generator'));
  });
});