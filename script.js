const botoesCurtir = document.querySelectorAll(".curtir");
botoesCurtir.forEach(function (botaoCurtir) {
    let curtiu = false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir() {
        const contador = botaoCurtir.querySelector("span");
        if (curtiu === false) {
            contador.textContent++;
            curtiu = true;
        }
        else {
            contador.textContent--;
            curtiu = false;
        }
    }
});

const btnTema = document.querySelector(".btn-tema");
btnTema.addEventListener("click", mudarTema);

function mudarTema() {
    document.body.classList.toggle("tema-escuro");

if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("tema-escuro");
}

btnTema.addEventListener("click", () => {
    const estaEscuro = document.body.classList.toggle("tema-escuro");
    localStorage.setItem("tema", estaEscuro ? "escuro" : "claro");
});
}

function mudaTema() {
     const corpoPagina = document.body;
     if (corpoPagina.classList.constains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
     } else {
        corpoPagina.classList.add("tema-escuro");
     }
};