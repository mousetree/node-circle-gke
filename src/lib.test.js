const lib = require('./lib');

test('helloWorld() returns some special text', () => {
  expect(lib.helloWorld()).toBe('Hello World');
});

test('helloWorld() returns some special text', () => {
  expect(lib.helloMikhail()).toBe('Hello Mikhail');
});
