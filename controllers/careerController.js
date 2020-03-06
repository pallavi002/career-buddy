const Career = require('../models/Career');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}



module.exports.searchCareer = async function(req, res) {
  // RegExp(escapeRegExp("")), $options: 'gi'
  let searchedCareer = await Career.find({ $text: { $search: "Web" } });
  // let searchedCareer = await Career.fuzzySearch("Web");
  console.log(searchedCareer);
  res.json(searchedCareer);
}

// module.exports.allCareer = function(req, res){

// }

// module.export.goalBasedCareer = function(req, res){

// }