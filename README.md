# @yuzulabo/query-types

> A variable validator using prop-types

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

QueryTypes(types, goodQuery); // { valid: true, errors: [] }
QueryTypes(types, badQuery); // { valid: false, errors: [ { name: 'ping', message: 'Invalid null `ping`...' } ] }
```
