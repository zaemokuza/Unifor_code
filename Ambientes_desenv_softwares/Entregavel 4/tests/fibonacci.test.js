const GenerateFibonacci = require('../fibonacci');

test('Sequência de Fibonacci até o 10º termo', () => {
    expect(GenerateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
  });

  test('Sequência de Fibonacci até o 5º termo', () => {
    expect(GenerateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });
 