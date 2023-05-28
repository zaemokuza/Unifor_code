const numeroPrimo = require("../numeroPrimo")

test('Verificar se o número 7 é primo', () => {
    expect(numeroPrimo(7)).toBe(true);
  });
  

  test('Verificar se o número 10 é primo', () => {
    expect(numeroPrimo(10)).toBe(false);
  });