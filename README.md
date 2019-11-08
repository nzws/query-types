# @yuzulabo/query-types

> A variable validator using prop-types

## tl;dr

```javascript
import PropTypes from 'prop-types';
import QueryTypes from '@yuzulabo/query-types';

const types = {
  ping: PropTypes.string.isRequired
};

const goodQuery = {
  ping: 'pong'
};

const badQuery = {
  ping() {
    return 'piyo';
  }
};

QueryTypes.check(types, goodQuery); // { valid: true, errors: [] }
QueryTypes.check(types, badQuery); // { valid: false, errors: [ { name: 'ping', message: 'Invalid null `ping`...' } ] }
```

## Extension validators (for QueryTypes)

All validators have `.isRequired`

```javascript
const extensionTypes = {
  OptionalStringWithLength: QueryTypes.stringWithLength(min, max),
  OptionalNumberWithLength: QueryTypes.numberWithLength(min, max),
  OptionalArrayWithLength: QueryTypes.arrayWithLength(min, max)
};
```
