const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

const mostra = (student) => {
  let array = Object.keys(student);
  let resposta = '';
  for (let index in array) {
   resposta = console.log(`${array[index]}, Nível: ${student[array[index]]}`);
  }
  return resposta;
};

console.log(mostra(student1));

console.log(mostra(student2));
