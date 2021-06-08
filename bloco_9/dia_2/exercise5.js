function pro() {
  const pros = new Promise((resolve, reject) => {
    const numeros = [];
    const somaDividida = [];
    const divisoes = [2, 3, 5, 10];
    const gerarNumero = () => Math.trunc(Math.random() * (50 - 1));

    for (let index = 0; index < 10; index += 1) {
      numeros.push(gerarNumero());
    }

    const quadrado = numeros.map((number) => number ** 2);

    const soma = quadrado.reduce((acc, actual) => (acc += actual));

    if (soma < 8000) {
      for (let i = 0; i < divisoes.length; i += 1) {
        somaDividida.push(Math.trunc(soma / divisoes[i]));
      }
      resolve(somaDividida);
    }
    reject(
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
  });
  
  pros
    .then((arrayResult) =>
      console.log(`Promise resolvida, resultado das divisões: ${arrayResult}`)
    )
    .catch((error) => error);
}
pro();
