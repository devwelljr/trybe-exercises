function hydrate(string) {
  let separa=[];
  let saida='';
  separa=string.split("").filter(n => (Number(n) || n == 0)).join("").replace( /\s/g, '');
  let separa2=separa.split("");
  let contador=0;
  for(let i=0;i<separa2.length;i+=1){
    contador+=Number(separa2[i]);
  }
  if(contador==1){
    saida=contador +' copo de água'
  }
  else{
    saida=contador +' copos de água' 
  }
  return saida;
}

//Referencia: https://github.com/tryber/sd-012-project-playground-functions/pull/27/files

module.exports = hydrate;