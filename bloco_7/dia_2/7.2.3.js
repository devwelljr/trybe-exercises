const student = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkill: "Ótimo",
};
 
const lista = (student) => Object.values(student);

console.log(lista(student));