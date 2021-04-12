# tm-result
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

