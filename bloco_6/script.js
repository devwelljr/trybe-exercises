const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal"
];
const selectEstados = document.getElementById("states");

function criarEstados() {
  for (let index = 0; index < estados.length; index += 1) {
    let opcoes = document.createElement("option");
    opcoes.textContent = estados[index];
    selectEstados.appendChild(opcoes);
  }
}
criarEstados();
