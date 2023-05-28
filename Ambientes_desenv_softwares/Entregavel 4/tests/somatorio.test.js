const calcularSoma = require('../somatorio');

test('Soma de um array com números positivos', () => {
    var numbers = [1, 2, 3, 4, 5];
    expect(calcularSoma(numbers)).toBe(15);
  });
  
test('Soma de um array com números negativos', () => {
    var numbers = [-1, -2, -3, -4, -5];
    expect(calcularSoma(numbers)).toBe(-15);
  });