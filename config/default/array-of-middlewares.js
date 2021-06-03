const strToArrMdws = (str) => {
  if (str) {
    return str.split(',');
  }
  return null;
};

module.exports = {
  users: {
    create: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_CREATE_USER) || [
      'validate-body-create-user-middleware',
      'create-user-middleware'
    ],
    getById: strToArrMdws(process.env.NODE_CONFIG_MIDDLEWARE_GET_BY_ID_USER) || [
      'check-length-user-id-middleware',
      'get-user-by-id-middleware'
    ]
  }
};
