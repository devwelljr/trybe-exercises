function pro () {
  const pros = new Promise ((resolve, reject) => {
    const numeros = [];
    const gerarNumero = () => Math.trunc(Math.random() * (50 - 1));

    for (let index = 0; index < 10; index += 1) {
        numeros.push(gerarNumero());
    }

    const quadrado = numeros.map((number) => number ** 2)

    const soma = quadrado.reduce((acc, actual) => acc += actual);
    
    if (soma < 8000) {
    resolve();
    } 
    reject();
  });
  pros
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'));
}
pro();