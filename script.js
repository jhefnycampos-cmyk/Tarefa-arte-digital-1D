const botoesCurtir = document.querySelectorAll(".curtir");

botoesCurtir.forEach(function (botaoCurtir) {
    let curtiu = false;

    // Correção 1: Removido o espaço antes de "click"
    botaoCurtir.addEventListener("click", curtir);

    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        let valorAtual = Number(contador.textContent);

        // Correção 2: Mudado 'curtir' para 'curtiu'
        if (curtiu === false) {
            contador.textContent = valorAtual + 1;
            curtiu = true;
        } else {
            contador.textContent = valorAtual - 1;
            curtiu = false;
        }
    }
});
