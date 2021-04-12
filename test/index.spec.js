const result = require('../index');


const badResults = () => ['', null, {}, [], undefined];
const okResult = () => ({ status: 'ok', result: 'ok', data: [] });
const nokResult = () => ({ status: 'nok', result: 'Some error!' });

describe('All functions should be defined.', () => {
  const funcs = ['isOk', 'isNOk', 'genOk', 'genNOk'];
  funcs.forEach((f) => {
    test(`Function ${f} defined`, () => {
      expect(result[f]).toBeDefined();
      expect(result[f]).toBeInstanceOf(Function);
    });
  });
});

describe('Test isOk function', () => {
  test('Should return false if no applicable result passed', () => {
    badResults().forEach((res) => {
      expect(result.isOk(res)).toBe(false);
    })
  });

  test('Should return true if OK result passed', () => {
    expect(result.isOk(okResult())).toBe(true);
  });

  test('Should return false if not OK result passed', () => {
    expect(result.isOk(nokResult())).toBe(false);
  });
});

describe('Test isNOk function', () => {
  test('Should return true if no applicable result passed', () => {
    badResults().forEach((res) => {
      expect(result.isNOk(res)).toBe(true);
    })
  });

  test('Should return true if not OK result passed', () => {
    expect(result.isNOk(nokResult())).toBe(true);
  });

  test('Should return false if OK result passed', () => {
    expect(result.isNOk(okResult())).toBe(false);
  });
});
