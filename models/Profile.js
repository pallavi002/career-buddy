const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: Boolean,
    // 0 for student, 1 for passout
    required: true
  },
  educationDetails: [
    {
      course: {
        type: String
      },
      marks: {
        type: Number
      },
      courseStatus: {
        type: Boolean
      }
    }
  ],
  goals: [
    {
      type: String
    }
  ]
})

module.exports = mongoose.model('Profile', profileSchema);