const mongoose = require('mongoose');
// var mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const careerSchema = mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  careerPath : 
    {
      name: {
        type: String,
        required: true
      },
      salary: {
        type: String,
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
})

careerSchema.index({ '$**': 'text'});
module.exports = mongoose.model('Career', careerSchema);