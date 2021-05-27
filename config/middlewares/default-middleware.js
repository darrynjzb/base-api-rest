module.exports = {
  users: {
    create: [
      'validate-body-create-user-middleware',
      'create-user-middleware'
    ]
  }
};
