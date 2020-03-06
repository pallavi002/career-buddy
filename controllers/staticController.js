const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.login = function(req, res){
  try {
      // console.log(req.body);
      User.findOne({username: req.body.username}, (userError, user)=>{
          if(user){
              user.comparePassword(req.body.password, function(pswdError, isMatch){
                  if(isMatch){
                      let userDetails = {
                          _id: user._id,
                          username: user.username,
                          name: user.name
                      }
                      jwt.sign(userDetails, process.env.JWT_SECRET_KEY, {expiresIn: '1h'}, function(tokenError, token){
                          if(tokenError){
                              res.status(403).json({
                                  message: "Something went wrong. Please try again."
                              })                   
                          }else{
                              res.json({
                                  status: 202,
                                  message: "Loged in successfully.",
                                  token,
                                  user: userDetails
                              })
                          }
                      })
                  }else{
                      res.json({
                          status: 204,
                          error: pswdError,
                          message: "Invalid Credentials."
                      })
                  }
              })
          }else{
              res.json({
                  status: 204,
                  error: userError,
                  message: "User does not exist."
              })
          }
      });    
  } catch (error) {
      res.json({
          error: error
      })
  }
}