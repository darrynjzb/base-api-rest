module.exports = {
  users: {
    create: [
      'validate-body-create-user-middleware',
      'create-user-middleware'
    ],
    getById: [
      'check-length-user-id-middleware',
      'get-user-by-id-middleware'
    ]
  }
};
