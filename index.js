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
 * Checks if err is error-like object
 * @param {*} err
 * @returns {err is {message: string, [key: string]: any}}
 */
function isErrorLike(err) {
  return isObj(err) && typeof err.message === 'string';
}

/**
 * Checks if object is a response result
 * @param {*} responseResult
 * @returns {r is ResponseResult}
 */
function isResponseResult(responseResult) {
  if (!isObj(responseResult)) {
    return false;
  }

  if (!responseResult.status || !STATUSES.has(responseResult.status)) {
    return false;
  }

  if (!responseResult.result || typeof responseResult.result !== 'string') {
    return false;
  }

  return true;
}

/**
 * Checks if argument is ok, response result object
 * @param {*} responseResult
 * @returns {boolean}
 */
function isOk(responseResult) {
  if (!isResponseResult(responseResult)) {
    return false;
  }

  return responseResult.status === 'ok' && responseResult.result === 'ok';
}

/**
 * Checks if argument is not ok(nok) response result object
 * @param {*} responseResult
 * @returns {boolean}
 */
function isNOk(responseResult) {
  return !isOk(responseResult);
}

/**
 * Generates ok response result object
 * @param {*} [data] optional data to attach to response result object
 * @returns {ResponseResult} Ok response result object
 */
function genOk(data) {
  if (isUndef(data)) {
    return { status: 'ok', result: 'ok' };
  }

  return { status: 'ok', result: 'ok', data };
}

/**
 * Generates not ok(nok) response result object
 * @param {Error|string} reason Reason for nok response(error instance or string)
 * @param {...string} [messages] Additional messages to include in response
 * @returns {ResponseResult} Nok response result object
 */
function genNOk(reason, ...messages) {
  let result = isErrorLike(reason) ? reason.message : reason;
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
