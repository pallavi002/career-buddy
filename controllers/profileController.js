const Profile = require('../models/Profile');

module.exports.updateprofile = async function (req, res) {
  try {
    educationDeatils = {
      course: req.body.course,
      marks: req.body.marks,
      goals: req.body.goals
    };
    let profile = Profile.findOneAndUpdate({ 'userId': req.body.userId },
      { $push: { educationDeatils } },
      { 'upsert': true, 'new': true, 'multi': true });
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
} 
