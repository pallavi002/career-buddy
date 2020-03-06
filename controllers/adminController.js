const Admin = require('../models/Career');

module.exports.Career = function (req, res, next) {
  try {
    let admin = await Admin.findOneAndUpdate({ "userId": req.body.userId },
      {
        $push: {
          careerPath: {
            name: req.body.name,
            salary: req.body.salary,
            job: req.body.job,
            prerequisite: req.body.prerequisite,
            $push: {
              path: {
                pros: req.body.pros,
                cons: req.body.cons,
                courses: req.body.courses
              }
            }
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