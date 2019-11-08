const check = require('./checkQueryTypes');
const lengthValidator = require('./validators/length');

module.exports = {
  check,
  ...lengthValidator
};
