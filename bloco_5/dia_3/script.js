function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //EXERCICIO 1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let lista = document.querySelector('#days');

  function Dias (){ 
  for (let index = 0; index < dezDaysList.length; index += 1){
    let lis = dezDaysList[index];
    let list = document.createElement("li");
    list.classList = "day";
    if(lis == 24 || lis == 31){
      list.classList = "day holiday";
    }
    if(lis == 4 || lis == 11|| lis == 18){
      list.classList = "friday"
    }
    if(lis == 25){
      list.classList = "day holiday friday"
    }
    list.innerText = lis;
    lista.appendChild(list);
  }
}
Dias();

  //EXERCICIO 2
  let butaoF = document.querySelector('.buttons-container');
  function holydays(feriados){
    let butao = document.createElement('button');
    let butaoEscrita = document.createTextNode('Feriados');
    butao.id = "btn-holiday";
    butao.appendChild(butaoEscrita);
    butaoF.appendChild(butao);
  }
  holydays();

  //EXERCICIO 3
  
  