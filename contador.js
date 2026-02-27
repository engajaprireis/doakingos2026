let doacoes = 1; // ALTERE SOMENTE AQUI
let meta = 350;

function atualizar() {
  const contador = document.getElementById("contador");
  const barra = document.getElementById("barra");

  if (contador && barra) {
    contador.innerText = doacoes + " / " + meta;
    let porcentagem = (doacoes / meta) * 100;
    barra.style.width = porcentagem + "%";
  }
}

atualizar();
