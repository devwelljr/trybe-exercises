//COR DA FONTE
function corFonte(cor) {
  let paragrafos = document.querySelectorAll(".paragrafo");
  for (index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.color = cor;
  }
  localStorage.setItem("fontColor", cor);
}

let bCorFonte = document.querySelectorAll(".botaoCorFonte");
for (index = 0; index < bCorFonte.length; index += 1) {
  bCorFonte[index].addEventListener("click", function (event) {
    corFonte(event.target.innerHTML);
  });
}

//BACKGROUND
function corFundo(cor) {
  let conteudo = document.querySelector(".conteudo");
  conteudo.style.background = cor;
  localStorage.setItem("backgroundColor", cor);
}

let bbackground = document.querySelectorAll(".botaoBackground");
for (index = 0; index < bbackground.length; index += 1) {
  bbackground[index].addEventListener("click", function (event) {
    corFundo(event.target.innerHTML);
  });
}

//TAMANHO FONTE
function tamanhoFonte(tamanho) {
  let paragrafos = document.querySelectorAll(".paragrafo");
  for (index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.fontSize = tamanho;
  }
  localStorage.setItem("font-size", tamanho);
}

let bTamanhoFonte = document.querySelectorAll(".botaoTamanho");
for (index = 0; index < bTamanhoFonte.length; index += 1) {
  bTamanhoFonte[index].addEventListener("click", function (event) {
    tamanhoFonte(event.target.innerHTML);
  });
}

//ESPAÇAMENTO
function espaça(height) {
  let paragrafos = document.querySelectorAll(".paragrafo");
  for (index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.lineHeight = height;
  }
  localStorage.setItem("lineHeight", height);
}

let bespaçamento = document.querySelectorAll(".botaoEspaçamento");
for (index = 0; index < bespaçamento.length; index += 1) {
  bespaçamento[index].addEventListener("click", function (event) {
    espaça(event.target.innerHTML);
  });
}

//TIPO DE FONTE
function fonteFamily(familia) {
  let paragrafos = document.querySelectorAll(".paragrafo");
  for (index = 0; index < paragrafos.length; index += 1) {
    paragrafos[index].style.fontFamily = familia;
  }
  localStorage.setItem("fontFamily", familia);
}

let bfonte = document.querySelectorAll(".botaoTipoFonte");
for (index = 0; index < bfonte.length; index += 1) {
  bfonte[index].addEventListener("click", function (event) {
    fonteFamily(event.target.innerHTML);
  });
}
