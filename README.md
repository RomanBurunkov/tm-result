# tm-result

[![npm](https://img.shields.io/npm/v/tm-result.svg)](https://www.npmjs.org/package/tm-result)

[![codecov](https://codecov.io/gh/RomanBurunkov/tm-result/branch/main/graph/badge.svg?token=XQR8J8HAMW)](https://codecov.io/gh/RomanBurunkov/tm-result)

Return and process results of functions or api calls as a JS object.

The common result object format is 

```
{ status, result, data }
```

 - `status` String with possible two values 'ok' or 'nok'(means not ok).
 - `result` String which should be equal to 'ok' if `status` is 'ok', or should contain details about why result is not ok.
 - `data` could be any value and contains a result data.


## Installation

```npm i tm-result```

## Functions

 - `genOk` Generates 'OK' result object.
 - `genNOk` Generates 'not OK' result object.
 - `isOk` Checks if passed arg is an 'OK' result object.
 - `isNOk` Checks if passed arg is a 'not OK' result object.
 