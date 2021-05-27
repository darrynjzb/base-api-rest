const mongoose = require('mongoose');
const { USER_STATUS } = require('../../utils/constants');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  document: { type: String, required: true },
  email: { type: String, required: true },
  birthdate: { type: Date, required: true },
  status: { type: String, default: 'active' ,enum: USER_STATUS, required: true }
});

module.exports.User = mongoose.model('User', UserSchema);