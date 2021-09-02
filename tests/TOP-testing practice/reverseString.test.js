const reverseString = require('./reverseString');

test('reverseString test 1', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('reverseString test 2', () => {
  expect(reverseString('Hi There')).toBe('erehT iH');
});

test('reverseString test 3', () => {
  expect(reverseString('This Is A tEsT...123')).toBe('321...TsEt A sI sihT');
});

