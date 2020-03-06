const Profile = require('../models/Profile');

module.exports.updateprofile = async function (req, res) {
  console.log(req.body);
  try {
    let educationDetails = req.body.educationDetails;
    let goals = req.body.goals;
    let profile = await Profile.findOneAndUpdate({ 'userId': req.body.userId },
      { $set: {
          $push: {
            educationDetails:{ 
              $each: {
                educationDetails
              } 
            } 
          },
          $push: {
            goals: {
              $each: {
                goals
              }
            }
          } 
        }
      },
      { 'upsert': true, 'new': true, 'multi': true });
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
} 
