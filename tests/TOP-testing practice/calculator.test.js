const calculator = require('./calculator');

test('calculator add test 1', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator add test 2', () => {
  expect(calculator.add(-1, 5)).toBe(4);
});

test('calculator subtract test 1', () => {
  expect(calculator.subtract(10, 6)).toBe(4);
});

test('calculator subtract test 2', () => {
  expect(calculator.subtract(-1, -5)).toBe(4);
});

test('calculator divide test 1', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('calculator divide test 2', () => {
  expect(calculator.divide(10, 0)).toBe('cannot divide by zero');
});

test('calculator multiply test 1', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('calculator multiply test 2', () => {
  expect(calculator.multiply(-2, 6)).toBe(-12);
});

