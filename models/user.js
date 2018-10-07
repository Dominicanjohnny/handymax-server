const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  email      : String,
  address    : String,
  username   : String,
  password   : String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;