function isPrime(num) {
  // Um número é primo se for maior que 1
  if (num <= 1) {
    return false;
  }

  // Verificar se o número é divisível por algum número menor que ele
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function checkPrime() {
  const num = document.getElementById("number").value;

  if (isPrime(num)) {
    document.getElementById("result").innerHTML = num + " é primo!";
  } else {
    document.getElementById("result").innerHTML = num + " não é primo.";
  }
}
