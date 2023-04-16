const fibo = (numero) => {
  if (numero < 2) {
    return numero;
  } else {
    return fibo(numero - 1) + fibo(numero - 2);
  }
};

function calcularFibonacci() {
  const num = parseInt(document.getElementById("numero").value);
  if (num <= 0 || isNaN(num)) {
    alert("Digite um número maior que 0!");
    return;
  } else {
    const fibonacci = [];
    for (let i = 0; i < num; i++) {
      fibonacci.push(fibo(i));
    }
    const fibolist = document.getElementById("resultado");
    fibolist.innerHTML = "";
    for (let i = 0; i < fibonacci.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Termo ${i}: ${fibonacci[i]}`;
      fibolist.appendChild(listItem);
    }
  }
}
