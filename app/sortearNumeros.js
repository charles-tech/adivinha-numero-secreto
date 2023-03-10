const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

console.log("numeroSecreto:", numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaioValor = document.getElementById("maior-valor");
elementoMaioValor.innerHTML = maiorValor;
