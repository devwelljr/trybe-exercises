const divUm = document.getElementById("divUm");
const divDois = document.getElementById("divDois");
const divTres = document.getElementById("divTres");
const input = document.getElementById("input");
const myWebpage = document.getElementById("mySpotrybefy");

function addTech(evento) {
  let elementoSelecionado = document.querySelector('.tech');
  elementoSelecionado.classList.remove('tech');
  evento.target.classList.toggle('tech');
}

divUm.addEventListener('click', addTech);
divDois.addEventListener('click', addTech);
divTres.addEventListener('click', addTech);

function AlteraTexto(evento){
  let elementoSelecionado = document.querySelector('.tech');
  elementoSelecionado.innerText = evento.target.value;
}

input.addEventListener('keypress', AlteraTexto);

/*
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = "Opção reiniciada";
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener("dblclick", resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.
