
function corFundo (cor) {
    let conteudo = document.querySelector('.conteudo');
    conteudo.style.background = cor;
    localStorage.setItem("backgroundColor", cor);
}

