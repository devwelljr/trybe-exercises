function techList(arrayTecnologias, name) {
  let ordenado = arrayTecnologias.sort();
  let objeto = [];
  if (ordenado.length > 0) {
    for (let i = 0; i < ordenado.length; i += 1) {
      objeto[i] = { tech: ordenado[i], name: name };
    }
    return objeto;
  } else {
    return 'Vazio!';
  }
}

module.exports = techList;