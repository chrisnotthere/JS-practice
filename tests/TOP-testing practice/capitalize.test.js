const capitalize = require('./capitalize');

test('capitalize test 1', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalize test 2', () => {
  expect(capitalize('hello there Bobby!')).toBe('Hello there Bobby!');
});

test('capitalize test 3', () => {
  expect(capitalize('woWoWowOWOWooo')).toBe('WoWoWowOWOWooo');
});

test('capitalize test 4', () => {
  expect(capitalize('')).toBe('');
});
