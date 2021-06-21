function encode(frase) {
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let array = frase.split('');
  for (let index in frase) {
    if (Object.hasOwnProperty.call(letras, array[index])) {
      array[index] = letras[frase[index]];
    }
  }
  return array.join('');
}

function decode(fraseNumerica) {
  let numeros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let array = fraseNumerica.split('');
  for (let index in fraseNumerica) {
    if (Object.hasOwnProperty.call(numeros, array[index])) {
      array[index] = numeros[fraseNumerica[index]];
    }
  }
  return array.join('');
}

module.exports = {
  encode, 
  decode, 
};