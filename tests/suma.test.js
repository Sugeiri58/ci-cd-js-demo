const suma = require('../src/suma');

test('suma de 2 + 3 debe ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('suma de 8 + 9 debe ser 17', () => {
  expect(suma(8, 9)).toBe(17);
});


test('suma de 2.5 + 3 debe ser 5.5', () => {
  expect(suma(2.5, 3)).toBe(5.5);
});
