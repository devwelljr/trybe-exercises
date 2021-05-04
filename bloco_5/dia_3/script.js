function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//EXERCICIO 1
const dezDaysList = [
  29,
  30,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
];

let lista = document.querySelector("#days");

function Dias() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let lis = dezDaysList[index];
    let list = document.createElement("li");
    list.classList = "days";
    if (lis == 24 || lis == 31) {
      list.classList = "days holiday";
    }
    if (lis == 4 || lis == 11 || lis == 18) {
      list.classList = "days friday";
    }
    if (lis == 25) {
      list.classList = "days holiday friday";
    }
    list.innerText = lis;
    lista.appendChild(list);
  }
}
Dias();

//EXERCICIO 2
let butaoF = document.querySelector(".buttons-container");
function holydays(feriados) {
  let butao = document.createElement("button");
  let butaoEscrita = document.createTextNode("Feriados");
  butao.id = "btn-holiday";
  butao.appendChild(butaoEscrita);
  butaoF.appendChild(butao);
}
holydays();

//EXERCICIO 3
let butao = document.querySelector("#btn-holiday");
butao.addEventListener("click", function () {
  document.querySelectorAll(".holiday")[0].style.background =
    "rgb(152,255,152)";
  document.querySelectorAll(".holiday")[1].style.background =
    "rgb(152,255,152)";
  document.querySelectorAll(".holiday")[2].style.background =
    "rgb(152,255,152)";
});
butao.addEventListener("dblclick", function () {
  document.querySelectorAll(".holiday")[0].style.background =
    "rgb(238,238,238)";
  document.querySelectorAll(".holiday")[1].style.background =
    "rgb(238,238,238)";
  document.querySelectorAll(".holiday")[2].style.background =
    "rgb(238,238,238)";
});

//EXERCICIO 4
let butaoS = document.querySelector(".buttons-container");
function friday(SextaFeira) {
  let butao = document.createElement("button");
  let butaoEscrita = document.createTextNode("Sexta-feira");
  butao.id = "btn-friday";
  butao.appendChild(butaoEscrita);
  butaoS.appendChild(butao);
}
friday();

//EXERCICIO 5
let butaoSS = document.querySelector("#btn-friday");
butaoSS.addEventListener("click", function () {
  document.querySelectorAll(".friday")[0].innerText = "SEXTOU!!! :)";
  document.querySelectorAll(".friday")[1].innerText = "SEXTOU!!! :)";
  document.querySelectorAll(".friday")[2].innerText = "SEXTOU!!! :)";
  document.querySelectorAll(".friday")[3].innerText = "SEXTOU!!! :)";
});
butaoSS.addEventListener("dblclick", function () {
  document.querySelectorAll(".friday")[0].innerText = "4";
  document.querySelectorAll(".friday")[1].innerText = "11";
  document.querySelectorAll(".friday")[2].innerText = "18";
  document.querySelectorAll(".friday")[3].innerText = "25";
});

//EXERCICIO 6
function diaMouseSobre() {
  let dias = document.querySelector("#days");
  dias.addEventListener("mouseover", function (evento) {
    evento.target.style.fontSize = "40px";
    evento.target.style.fontWeight = "400";
  });
}

function diaMouseFora() {
  let dias = document.querySelector("#days");
  dias.addEventListener("mouseout", function (evento) {
    evento.target.style.fontSize = "20px";
    evento.target.style.fontWeight = "200";
  });
}

diaMouseSobre();
diaMouseFora();

//EXERCICIO 7

function adicionaTarefa(nomeDaTarefa) {
  let minhasTarefas = document.querySelector(".my-tasks");
  let criarTarefas = document.createElement("span");

  criarTarefas.innerHTML = nomeDaTarefa;
  minhasTarefas.appendChild(criarTarefas);
}

adicionaTarefa("Tarefa :");

//EXERCICIO 8

function legendaComCor(cor) {
  let minhasTarefas = document.querySelector(".my-tasks");
  let criarDiv = document.createElement("div");

  criarDiv.className = "task";
  criarDiv.style.background = cor;
  minhasTarefas.appendChild(criarDiv);
}
legendaComCor("rgb(57, 255, 20)");

//EXERCICIO 9
function colocaClassTarefa() {
  let divTarefa = document.querySelector(".task");
  let tarefaSelecionada = document.getElementsByClassName("task selected");
  divTarefa.addEventListener("click", function (evento) {
    if (tarefaSelecionada.length === 0) {
      evento.target.className = "task selected";
    } else {
      evento.target.className = "task";
    }
  });
}

colocaClassTarefa();

//EXERCICIO 10

function corDias() {
  let dias = document.querySelector("#days");
  dias.addEventListener('click', function(evento){
    evento.target.style.color = 'rgb(57, 255, 20)';
  })
  dias.addEventListener('dblclick', function(event){
    event.target.style.color = 'rgb(119,119,119)';
  })
}
corDias();
