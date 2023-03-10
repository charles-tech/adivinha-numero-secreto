function verificarOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += "<div> Valor Invalido</div>";
    return;
  }
  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `<div> Valor Inválido: O número secreto precisar esta entre ${menorValor} e ${maiorValor}</div>`;
    return;
  }
  if (numero === numeroSecreto) {
    document.body.innerHTML = `<h2> Você acertou! </h2>
    <h3>o Numero secrero era ${numeroSecreto}
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>`;
  } else {
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>`;
  }
}
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener("click", (e) => {
  if (e.target.id == "jogar-novamente") {
    window.location.reload();
  }
});
