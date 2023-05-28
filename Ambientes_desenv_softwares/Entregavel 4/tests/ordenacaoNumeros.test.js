const ordenacaoNumeros = require('../ordenacaoNumeros');

test('Ordenação correta do array [4, 2, 7, 1, 5]', () => {
    expect(ordenacaoNumeros([4, 2, 7, 1, 5])).toEqual([1, 2, 4, 5, 7]);
  });
  
  // Teste 2: Verificar se o array [10, 8, 6, 4, 2] é ordenado corretamente
  test('Ordenação correta do array [10, 8, 6, 4, 2]', () => {
    expect(ordenacaoNumeros([10, 8, 6, 4, 2])).toEqual([2, 4, 6, 8, 10]);
  });