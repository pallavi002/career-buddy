const Profile = require('../models/Profile');

module.exports.updateprofile = async function (req, res) {
  console.log(req.body.userId);
  try {
    educationDetails = {
      course: req.body.course,
      marks: req.body.marks,
      goals: req.body.goals
    };
    let profile = await Profile.findOneAndUpdate({ 'userId': req.body.userId },
      { $push: { educationDetails } },
      { 'upsert': true, 'new': true, 'multi': true });
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
} 
