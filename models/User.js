const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


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
// Hashing password before saving in the database.
userSchema.pre('save', function(next){
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(parseInt(process.env.SALT_WORK_FACTOR), function(err, salt){
      if(err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash){
          if(err) return next(err);

          user.password = hash;
          next();
      });
  });
});

// Adding comparePassword method to User Schema
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return cb(err);
      cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);