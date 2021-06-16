function geraNumber () {
  let num = 0;
  num = Math.trunc(Math.random() * 100);
  return num;
}

module.exports = geraNumber;