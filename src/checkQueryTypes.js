const _PROP_TYPES_SECRET_ = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

const checkQueryTypes = (types = {}, query = {}) => {
  const errors = [];
  Object.keys(types).forEach(typeName => {
    let error;
    try {
      error = types[typeName](
        query,
        typeName,
        null,
        null,
        null,
        _PROP_TYPES_SECRET_
      );
    } catch (e) {
      error = e;
    }

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[query-types]', error.message || error);
      }

      errors.push({
        name: typeName,
        message: error.message || error
      });
    }
  });

  return {
    valid: !errors[0],
    errors
  };
};

module.exports = checkQueryTypes;
