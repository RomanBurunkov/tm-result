const { isObject } = require('tm-is');

exports.isOk = (r) => (!isObject(r) ? false : r.status === 'ok' && r.result === 'ok');

exports.isNOk = (r) => (!isObject(r) ? true : r.status !== 'ok' || r.result !== 'ok');

exports.genOk = (data) => (typeof data === 'undefined'
  ? { status: 'ok', result: 'ok' }
  : { status: 'ok', result: 'ok', data }
);

exports.genNOk = (r) => ({
  status: 'nok',
  result: isObject(r) && r instanceof Error ? r.message : r,
});
