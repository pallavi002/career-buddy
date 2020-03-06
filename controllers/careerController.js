const Career = require('../models/Career');
const Profile = require('../models/Profile');

module.exports.searchCareer = async function(req, res) {
  let searchedCareer = await Career.find({ $text: { $search: req.body.search } });
  console.log(searchedCareer);
  res.json(searchedCareer);
}

module.exports.allCareer = async function(req, res){
  res.json(
    await Career.find({})
  )
}

module.exports.goalBasedCareer = async function(req, res){
  let goals = await Profile.findOne({userId: req.body.userId}).select({'goals': 1});
  goals = goals.goals.join(" ");
  console.log(goals);
  let searchedCareer = await Career.find({ $text: { $search: goals } });
  res.json(searchedCareer);
}