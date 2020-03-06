const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  contact: {
    type: Number,
    minlength: 10,
    maxlength: 10
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin']
  }
})
module.exports = mongoose.Model('User', userSchema);