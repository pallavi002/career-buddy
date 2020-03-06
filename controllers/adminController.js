const Admin = require('../models/Career');

module.exports.career = async function (req, res, next) {
  try {
    let admin = await Admin.findOneAndUpdate({ "careerPath.name": req.body.name },
      {
        $set: {
          adminId: "5e621ff9b015792ff01cbf2c",
          careerPath: {
            name: req.body.name,
            salary: req.body.salary,
            job: req.body.job,
            prerequisite: req.body.prerequisite,
            path: req.body.path
          }
        }
      },
      { upsert: true, new: true });
    res.json(admin);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
}