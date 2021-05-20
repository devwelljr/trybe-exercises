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
