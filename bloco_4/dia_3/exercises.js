let n = 5;
/* Exercicio 1
let rept = "";
if (n > 0) {
  for (let index = 0; index < n; index += 1) {
    rept = rept + "*";
  }

  for (let indexc = 0; indexc < n; indexc += 1) {
    console.log(rept);
  }
}
*/

/*exercicio 2
let linha = '';

if (n > 0) {
  for (let index = 0; index < n; index += 1) {
    linha += "*";
    console.log(linha)
  }
}
*/

/*exercicio 3
let linha = "";
let spa = "";

if (n > 0) {
  for (espaços = 0; espaços < n; espaços += 1) {
    linha += " ";
  }
  for (let index = 0; index < n; index += 1) {
    linha = linha.substr(1);
    linha += "*";
    console.log(linha);
  }
}
*/

/*exercicio 4
if (n > 0) {
  let meio = (n + 1) / 2;
  let left = meio;
  let right = meio;

  for (let linhaIndex = 0; linhaIndex <= meio; linhaIndex += 1) {
    let linha = "";
    for (let colunaIndex = 0; colunaIndex <= n; colunaIndex += 1) {
      if (colunaIndex > left && colunaIndex < right) {
        linha += '*';
      }else{
        linha += ' ';
      }
    }
    console.log(linha)
    right += 1;
    left -= 1;
    
  }
}
*/
