const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    // 0 for student, 1 for passout
    enum: ['0', '1'],
    required: true
  },
  educationDetails: [
    {
      course: {
        type: String
      },
      marks: {
        type: String
      },
      courseStatus: {
        type: String,
        enum: ["0", "1"]
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