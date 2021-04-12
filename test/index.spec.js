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
