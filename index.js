const { isObj, isUndef } = require('tm-is');

exports.isOk = (r) => isObj(r) && r.status === 'ok' && r.result === 'ok';

exports.isNOk = (r) => !isObj(r) || r.status !== 'ok' || r.result !== 'ok';

exports.genOk = (data) => (isUndef(data)
  ? { status: 'ok', result: 'ok' }
  : { status: 'ok', result: 'ok', data }
);

exports.genNOk = (r, ...messages) => {
  const result = {
    status: 'nok',
    result: isObj(r) && r instanceof Error ? r.message : r,
  };
  if (Array.isArray(messages) && messages.length) {
    result.messages = [...messages];
  }
  return result;
};
