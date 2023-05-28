function calcularSoma(num) {
    var soma = 0;
  
    for (var i = 0; i < num.length; i++) {
      soma += num[i];
    }
  
    return soma;
  }

  module.exports = calcularSoma;