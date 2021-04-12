const result = require('../index');
const { isObject } = require('tm-is');

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

describe('Test genOk function', () => {
  test('Should return an object', () => {
    expect(isObject(result.genOk())).toBe(true);
  });

  test('Returned object should have status and result fields.', () => {
    const res = result.genOk();
    expect(res.status).toBeDefined();
    expect(res.result).toBeDefined();
  });

  test('Returned object should not contain data field if no args passed.', () => {
    const res = result.genOk();
    expect(res.status).toBeDefined();
    expect(res.result).toBeDefined();
    expect(Object.keys(res).length).toBe(2);
  });

  test('Returned object should contain data field if it passed as an argument.', () => {
    const data = 'Some data';
    const res = result.genOk(data);
    expect(res.status).toBeDefined();
    expect(res.result).toBeDefined();
    expect(res.data).toBe(data);
  });

  test('Returned object should be an OK result object', () => {
    const res = result.genOk('data');
    expect(result.isOk(res)).toBe(true);
  });
});

describe('Test genNOk function', () => {
  test('Should return an object', () => {
    expect(isObject(result.genNOk())).toBe(true);
  });

  test('Returned object should have status and result fields.', () => {
    const err = 'Error!';
    const res = result.genNOk(err);
    expect(res.status).toBeDefined();
    expect(res.result).toBe(err);
  });

  test('Returned object should be a not OK result object', () => {
    const res = result.genNOk('Error!');
    expect(result.isNOk(res)).toBe(true);
  });

  test('result field should be an error message text if Error passed as an argumet.', () => {
    const msg = 'Error!';
    const res = result.genNOk(new Error(msg));
    expect(res.result).toBe(msg);
  });
});
