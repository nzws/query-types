const _PROP_TYPES_SECRET_ = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

const QueryTypes = (types = {}, query = {}) => {
  const errors = [];
  Object.keys(types).forEach(typeName => {
    let error;
    try {
      error = types[typeName](query, typeName, null, null, null, _PROP_TYPES_SECRET_);
    } catch (e) {
      error = e;
    }

    if (error) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn('[query-types]', error.message);
      }

      errors.push({
        name: typeName
      });
    }
  });

  return !errors[0] ? false : errors;
};

module.exports = QueryTypes;
