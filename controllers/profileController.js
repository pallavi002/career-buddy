const Profile = require('../models/Profile');

module.exports.updateprofile = async function (req, res) {
  console.log(req.body);
  try {
    educationDetails = req.body.educationDetails;
    let profile = await Profile.findOneAndUpdate({ 'userId': req.body.userId },
      { $push:  {educationDetails:{ $each: {educationDetails} } } },
      { 'upsert': true, 'new': true, 'multi': true });
    res.json(profile);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
} 
