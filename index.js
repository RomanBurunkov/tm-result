const { isObj, isUndef, isNotEmptyArr } = require('tm-is');

/**
 * Response result object
 * @typedef {Object} ResponseResult
 * @property {'ok'|'nok'} status
 * @property {string} result
 * @property {*} [data]
 * @property {string[]} [messages]
 */

const STATUSES = new Set(['ok', 'nok']);

/**
 * Check if error-like
 * @param {*} err
 * @returns {err is {message: string, [key: string]: any}}
 */
function isErrorLike(err) {
  return isObj(err) && typeof err.message === 'string';
}

/**
 * Check if object is a response result
 * @param {*} r
 * @returns {r is ResponseResult}
 */
function isResponseResult(r) {
  if (!isObj(r)) {
    return false;
  }

  if (!r.status || !STATUSES.has(r.status)) {
    return false;
  }

  if (!r.result || typeof r.result !== 'string') {
    return false;
  }

  return isObj(r) && 'status' in r && 'result' in r;
}

/**
 * Check if response is ok
 * @param {*} r
 * @returns {boolean}
 */
function isOk(r) {
  if (!isResponseResult(r)) {
    return false;
  }

  return r.status === 'ok' && r.result === 'ok';
}

/**
 * Check if response is not ok
 * @param {*} r
 * @returns {boolean}
 */
function isNOk(r) {
  return !isOk(r);
}

/**
 * Generate ok response
 * @param {*} [data] optional data to include
 * @returns {ResponseResult}
 */
function genOk(data) {
  if (isUndef(data)) {
    return { status: 'ok', result: 'ok' };
  }

  return { status: 'ok', result: 'ok', data };
}

/**
 * Generate nok response
 * @param {*} r
 * @param {...string} messages
 * @returns {ResponseResult}
 */
function genNOk(r, ...messages) {
  let result = isErrorLike(r) ? r.message : r;
  if (!result) {
    result = 'error';
  }

  const responseResult = { status: 'nok', result };
  if (isNotEmptyArr(messages)) {
    responseResult.messages = [...messages];
  }

  return responseResult;
}

exports.isResponseResult = isResponseResult;
exports.isOk = isOk;
exports.isNOk = isNOk;
exports.genOk = genOk;
exports.genNOk = genNOk;
