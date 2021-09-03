const arrayCheck = require('./arrayCheck');

test('array check test 1', () => {
  expect(arrayCheck([1,2,3,4,5,6]))
    .toMatchObject({"average": 3.5, "length": 6, "max": 6, "min": 1});
});

test('array check test 2', () => {
  expect(arrayCheck([1,8,3,4,2,6]))
    .toMatchObject({"average": 4, "length": 6, "max": 8, "min": 1});
});

test('array check test 3', () => {
  expect(arrayCheck([1,1,1,1,1]))
    .toMatchObject({"average": 1, "length": 5, "max": 1, "min": 1});
});

test('array check test 3', () => {
  expect(arrayCheck([0]))
    .toMatchObject({"average": 0, "length": 1, "max": 0, "min": 0});
});
