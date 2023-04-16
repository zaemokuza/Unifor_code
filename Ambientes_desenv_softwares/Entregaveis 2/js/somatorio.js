function calcularSoma() {
    const numeros = document.getElementById("numeros").value;
    const listaNumeros = numeros.split(",");
    let soma = 0;
    for (let i = 0; i < listaNumeros.length; i++) {
      const num = parseInt(listaNumeros[i]);
      if (!isNaN(num)) {
        soma += num;
      }
    }
    const resultado = document.getElementById("resultado");
    resultado.textContent = `A soma dos números é: ${soma}`;
  }