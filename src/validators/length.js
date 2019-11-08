const checkLength = (length, min, max) => {
  if (min !== undefined && length < min) {
    return 'min';
  }

  if (max !== undefined && length > max) {
    return 'max';
  }
};

const createLengthValidator = (type, optionalType = false) => (min, max) => {
  const runner = (isRequired = false) => (query, typeName) => {
    const prop = query[typeName];
    if (prop === undefined && isRequired) {
      return `${typeName} is not found (marks isRequired, but return undefined)`;
    }

    if (optionalType) {
      if (type === 'array' && !Array.isArray(prop)) {
        return `${typeName} isn't ${type} (return ${typeof prop})`;
      }
    } else if (typeof prop !== type) {
      return `${typeName} isn't ${type} (return ${typeof prop})`;
    }

    const length = type === 'number' ? prop : prop.length;
    const check = checkLength(length, min, max);
    if (check) {
      const symbol = check === 'min' ? '<' : '>';
      const num = check === 'min' ? min : max;
      return `${typeName} isn't [prop] ${symbol} ${num}`;
    }
  };

  const func = runner();
  func.isRequired = runner(true);

  return func;
};

const stringWithLength = createLengthValidator('string');
const numberWithLength = createLengthValidator('number');
const arrayWithLength = createLengthValidator('array', true);

module.exports = {
  stringWithLength,
  numberWithLength,
  arrayWithLength
};
