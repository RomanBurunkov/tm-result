const result = require('../index');

const funcs = ['isOk', 'isNOk', 'genOk', 'genNOk'];

describe('All functions should be defined.', () => {
  funcs.forEach((f) => {
    test(`Function ${f} defined`, () => {
      expect(result[f]).toBeDefined();
      expect(result[f]).toBeInstanceOf(Function);
    });
  });
});

describe('Test isOk function', () => {
  test('Should return false if no applicable result passed', () => {
    ['', null, {}, [], undefined].forEach((res) => {
      expect(result.isOk(res)).toBe(false);
    })
  });
});

describe('Test isNOk function', () => {
  test('Should return true if no applicable result passed', () => {
    ['', null, {}, [], undefined].forEach((res) => {
      expect(result.isNOk(res)).toBe(true);
    })
  });
});
