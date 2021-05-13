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
  const apagar = document.getElementById("botaoLimpar");
  
  function criarEstados() {
    for (let index = 0; index < estados.length; index += 1) {
      let opcoes = document.createElement("option");
      opcoes.textContent = estados[index];
      selectEstados.appendChild(opcoes);
    }
  }
  criarEstados();
  
  apagar.addEventListener('click', function () {
      document.getElementById('nome').value = '';
      document.getElementById('email').value = '';
      document.getElementById('cpf').value = '';
      document.getElementById('city').value = '';
      document.getElementById('endereço').value = '';
      document.getElementById('resumo').value = '';
      document.getElementById('cargo').value = '';
      document.getElementById('descricao').value = '';
      document.getElementById('data').value = '';
      document.getElementById('states').value = '';
  })
