const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function (botaoCurtir){
    let curtiu = false;

    botaoCurtir.addEventListener("click", function curtir);
function curtir(){
      const contador = botaoCurtir.querySelector("span");
      if (curtiu === false) {
              contador.textContent = numero numeroAtual + 1;
              curtiu = true;
        }else{
contador.textContent = numeroAtual - 1;
curtiu = false;
  }
 }
}); 