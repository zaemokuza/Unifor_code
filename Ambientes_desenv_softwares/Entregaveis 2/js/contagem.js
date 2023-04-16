const numeros = [];

function lerNumero() {
  const inputNumero = document.getElementById("inputNumero");
  const valor = inputNumero.value.trim();

  if (valor !== "fim" && valor !== "") {
    numeros.push(parseFloat(valor));
    inputNumero.value = "";
    lerNumero(); // chama a função para atualizar o resultado na tela
  } else {
    let contadorInt = 0;
    let contadorFlo = 0;

    for (let i = 0; i < numeros.length; i++) {
      if (Number.isInteger(numeros[i])) {
        contadorInt++;
      } else {
        contadorFlo++;
      }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Número(s) inteiro(s): ${contadorInt}<br>Número(s) não inteiro(s): ${contadorFlo}`;
  }
}

const botaoAdicionar = document.getElementById("botaoAdicionar");
botaoAdicionar.addEventListener("click", lerNumero);

