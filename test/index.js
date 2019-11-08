const PropTypes = require('prop-types');
const QueryTypes = require('../src');

const test = (data, validResult) => {
  if (data === validResult) {
    console.log('✔ OK!');
  } else {
    throw new Error(`❌ Error: ${data} is not ${validResult}`);
  }
};

const types = {
  string: PropTypes.string.isRequired,
  stringWithLength: QueryTypes.stringWithLength(1, 5).isRequired,
  numberWithLength: QueryTypes.numberWithLength(1, 5).isRequired,
  arrayWithLength: QueryTypes.arrayWithLength(1, 5).isRequired
};

const goodQuery = {
  string: 'pong',
  stringWithLength: 'aaa',
  numberWithLength: 3,
  arrayWithLength: [1, 2, 3]
};

const badQuery = {
  string() {
    return 'piyo';
  },
  stringWithLength: 'aaaaaaaaaaa',
  numberWithLength: 0,
  arrayWithLength: []
};

test(QueryTypes.check(types, goodQuery).valid, true);
test(QueryTypes.check(types, badQuery).valid, false);
