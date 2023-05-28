const MDC = require('../mdc');

// Teste 1: Verificar o MDC de 10 e 25
test('MDC de 10 e 25', () => {
  expect(MDC(10, 25)).toBe(5);
});

// Teste 2: Verificar o MDC de 24 e 36
test('MDC de 24 e 36', () => {
  expect(MDC(24, 36)).toBe(12);
});