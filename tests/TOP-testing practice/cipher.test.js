const cipher = require('./cipher');

test('Caesar Cipher test 1', () => {
  expect(cipher('abc', 1)).toBe('bcd');
});

test('Caesar Cipher test 2', () => {
  expect(cipher('hello', 2)).toBe('jgnnq');
});

test('Caesar Cipher test 3', () => {
  expect(cipher('Hello!?', 1)).toBe('Ifmmp!?');
});

test('Caesar Cipher test 3', () => {
  expect(cipher('wxyz', 1)).toBe('xyza');
});

test('Caesar Cipher test 4', () => {
  expect(cipher('hello', 0)).toBe('hello');
});

