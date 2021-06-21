const { encode, decode } = require('./encodeDecode.js');
//npm test exercises-part2/encodeDecode.test.js

describe('Testa a função encode e decode', () => {
  it('Teste se encode é função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Teste se decode é função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('teste se a vogal a é convertida em 1', () => {
    expect(encode('a')).toEqual('1');
  });

  it('teste se a vogal e é convertida em 2', () => {
    expect(encode('e')).toEqual('2');
  });

  it('teste se a vogal i é convertida em 3', () => {
    expect(encode('i')).toEqual('3');
  });

  it('teste se a vogal o é convertida em 4', () => {
    expect(encode('o')).toEqual('4');
  });

  it('teste se a vogal u é convertida em 5', () => {
    expect(encode('u')).toEqual('5');
  });

  it('este se os número 1 são convertido nas vogais a', () => {
    expect(decode('1')).toEqual('a');
  });

  it('este se os número 2 são convertido nas vogais e', () => {
    expect(decode('2')).toEqual('e');
  });

  it('este se os número 3 são convertido nas vogais i', () => {
    expect(decode('3')).toEqual('i');
  });

  it('este se os número 4 são convertido nas vogais o', () => {
    expect(decode('4')).toEqual('o');
  });

  it('este se os número 5 são convertido nas vogais u', () => {
    expect(decode('5')).toEqual('u');
  });

  it('Teste se Encode a string que é retornada, têm o mesmo número de caracteres', () => {
  expect(encode('wellington').length).toEqual(10);
  });

  it('Teste se Decode a string que é retornada, têm o mesmo número de caracteres', () => {
  expect(decode('w2llington').length).toEqual(10);
  });
});
