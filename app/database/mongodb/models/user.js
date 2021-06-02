const mongoose = require('mongoose');
const { USER_STATUS } = require('../../../utils/constants');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    document: { type: String, required: true },
    email: { type: String, required: true },
    birthdate: { type: Date, required: true },
    status: { type: String, default: 'active', enum: USER_STATUS, required: true }
  },
  {
    collection: 'users'
  }
);

UserSchema.index({ email: 1, username: 1, document: 1 }, { unique: true });

module.exports = mongoose.model('User', UserSchema);