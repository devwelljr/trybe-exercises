const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

//EXERCICIO 1
function adicionaTurno(lesson, key, value) {
  let add = (lesson[key] = value);
  return add;
}

//EXERCICIO 2
function keysObject(lesson) {
  let chaves = Object.keys(lesson);
  return chaves;
}

//EXERCICIO 3
function tamanhoObjeto(lesson) {
  let tamanho = Object.entries(lesson).length;
  return tamanho;
}

//EXERCICIO 4
function valoresObjeto(lesson) {
  let valores = Object.values(lesson);
  return valores;
}

//EXERCICIO 5
let allLessons = {};

allLessons["lesson1"] = lesson1;
allLessons["lesson2"] = lesson2;
allLessons["lesson3"] = lesson3;

//EXERCICIO 6
function totalEstudantes(allLessons) {
  let total =
    allLessons.lesson1.numeroEstudantes +
    allLessons.lesson2.numeroEstudantes +
    allLessons.lesson3.numeroEstudantes;
  return total;
}

//EXERCICIO 7
function valorDaChave(lesson, chave) {
  let va = Object.entries(lesson)[chave];
  let resposta = va[1];
  return resposta;
}

//EXERCICIO 8
function verificaPar(lesson, key, value) {
  let chaves = Object.keys(lesson);
  let valores = Object.values(lesson);
  let resposta = chaves.includes(key) && valores.includes(value);
  return resposta;
}

//BONUS 1
function quantidadeMatematicos(allLessons) {
  let materia1 = allLessons.lesson1.materia;
  let materia2 = allLessons.lesson2.materia;
  let materia3 = allLessons.lesson3.materia;
  let numeroMatematicos = 0;
  if (materia1 === 'Matemática') {
    numeroMatematicos += allLessons.lesson1.numeroEstudantes;
  }
  if (materia2 === 'Matemática') {
    numeroMatematicos += allLessons.lesson2.numeroEstudantes;
  }
  if (materia3 === 'Matemática') {
    numeroMatematicos += allLessons.lesson3.numeroEstudantes;
  }
  return numeroMatematicos;
}

//BONUS 2
function relatorio (allLessons, professor) {
  let professor1 = allLessons.lesson1.professor;
  let professor2 = allLessons.lesson2.professor;
  let professor3 = allLessons.lesson3.professor;
  let objetoResposta = {
    professor: 'a',
    aulas: [],
    estudantes: 0,
  }

  if (professor === professor1){
    objetoResposta['professor'] = professor1;
    objetoResposta['aulas'] += allLessons.lesson1.materia;
    objetoResposta['estudantes'] += allLessons.lesson1.numeroEstudantes;
  }

  if (professor === professor2){
    objetoResposta['professor'] = professor2;
    objetoResposta['aulas'] += allLessons.lesson2.materia;
    objetoResposta['estudantes'] += allLessons.lesson2.numeroEstudantes;
  }

  if (professor === professor3){
    objetoResposta['professor'] = professor3;
    objetoResposta['aulas'] += allLessons.lesson3.materia;
    objetoResposta['estudantes'] += allLessons.lesson3.numeroEstudantes;
  }
  return objetoResposta;
}
console.log(relatorio(allLessons, 'Maria Clara'));