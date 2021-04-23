let a = 1;
let b = 3;
let c = 1;

let adição = a + b;
let trio = a + b + c;
let subtração = a - b;
let multiplicação = a * b;
let divisão = a / b;
let módulo = a % b;

let peça = "BISPO";

let nota = 60;

/* exercicio 2 if (a > b) {
  console.log('O maior numero é' a);
}
  else {
      console.log('O maior numero é' b);
  }*/

/* exercicio 3 if (a > b && a > c){
    console.log('o maior numero é', a);
}
else if(b > a && b > c){
    console.log('o maior numero é', b);
}
else{
    console.log('o maior numero é', c)
} */

/* exercicio 4 if(a > 0){
  console.log('positive')
}
else if(a < 0){
  console.log('negative')
}
else{
  console.log(0)
} */

/* exercicio 5 if(trio === 180){
  console.log(true)
}
else if (trio < 180){
  console.log(false)
}
else{
  console.log('Erro')
} */

/* exercicio 6 switch(peça.toLowerCase()){
    case 'peão':
      console.log('Vertical');
      break;

      case 'bispo':
        console.log('Diagonal');
        break;

        case 'rei':
          console.log('Move em todas as direções');
          break;

          case 'rainha':
            console.log('Move em todas as direções');
            break;
            
            case 'cavalo':
            console.log('O movimento do cavalo é em forma de “L”');
            break;

            case 'torre':
            console.log('movimenta-se pela vertical ou horizontal');
            break;

            default:
              console.log('Inválida')
    
} */

/* exercicio 7 if(nota >= 90 ){
    console.log('A');
}

    else if(nota >= 80){
    console.log('B');
        }

    else if(nota >= 70){
    console.log('C');
          }

    else if(nota >= 60){
    console.log('D');
    }

    else if(nota >= 50){
    console.log('F');
        }

    else if(nota < 50){
    console.log('F');
        }

    else if(nota > 100 | nota < 0){
      console.log('Erro');
    }*/

/*exercicio 8 if (a % 2 === 0 | b % 2 === 0 | c % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}/*

/*exercicio 9 if (a % 2 === 0 | b % 2 === 0 | c % 2 === 0) {
  console.log(false);
} else {
  console.log(true);
}*/

/*exercicio 10 let valorVenda = 10;
let valorCusto = 1;
let lucro;


if(valorCusto < 0 | valorVenda < 0){
  console.log('erro');
}else{
  console.log(lucro = (valorVenda - valorCusto* 1.2)*1000)
}*/

let salariobruto = 2700;
let salarioliquidoinss;
let salarioliquido;
let faixasalarial = 3;


switch (faixasalarial) {
  case 1:
    if (salariobruto <= 1903.98) {
      console.log((salarioliquido = salariobruto * 0.92));
    }
    break;

  case 2:
    if (1903.98 < salariobruto <= 2594.92) {
      salarioliquidoinss = salariobruto * 0.91;
      console.log((salarioliquido = salarioliquidoinss * 0.925) + 142.8);
    }
    break;

  case 3:
    if (2594.92 < salariobruto <= 2826.65) {
      salarioliquidoinss = salariobruto * 0.89;
      console.log((salarioliquido = salarioliquidoinss * 0.925) + 142.8);
    }
    break;

  case 4:
    if (2826.66 < salariobruto <= 3751.05) {
      salarioliquidoinss = salariobruto * 0.89;
      console.log((salarioliquido = salarioliquidoinss * 0.85) + 354.8);
    }
    break;

  case 5:
    if (3751.06 < salariobruto <= 4664.68) {
      salarioliquidoinss = salariobruto * 0.89;
      console.log((salarioliquido = salarioliquidoinss * 0.775) + 636.13);
    }
    break;

  case 6:
    if (4664.68 < salariobruto <= 5189.82) {
      salarioliquidoinss = salariobruto * 0.89;
      console.log((salarioliquido = salarioliquidoinss * 0.725) + 869.36);
    }
    break;
  case 7:
    if (salariobruto > 5189.82) {
      salarioliquidoinss = salariobruto - 570.88;
      console.log((salarioliquido = salarioliquidoinss * 0.725) + 869.36);
    }
    break;
}
