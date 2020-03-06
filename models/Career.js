const mongoose = require('mongoose');

const careerSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  careerPath = [
    {
      name: {
        type: String,
        required: true
      },
      salary: {
        type: Number,
        required: true
      },
      job: {
        type: String,
        required: true
      },
      prerequisite: {
        type: String
      },
      path: [
        { 
          pros: {
            type: String
          },
          cons: {
            type: String
          },
          courses: {
            type: String
          }
        }
      ]
    }
  ]
})
module.exports = mongoose.Model('Career', careerSchema);