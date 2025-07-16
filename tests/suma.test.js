const suma = require('../src/suma');

test('suma de 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});
