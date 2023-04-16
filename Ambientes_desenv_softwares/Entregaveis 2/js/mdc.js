function calcularMDC(a, b) {
    if (b === 0) {
      return a;
    } else {
      return calcularMDC(b, a % b);
    }
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = parseInt(document.querySelector('#num1').value);
    const num2 = parseInt(document.querySelector('#num2').value);
    const resultado = calcularMDC(num1, num2);
    document.querySelector('#resultado').innerHTML = `O MDC de ${num1} e ${num2} é ${resultado}`;});
