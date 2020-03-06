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

module.exports.register = async function (req, res) {
  if( req.body.name && req.body.email && req.body.contact) {
    try {
      let user = await User.findOne({ 'email': req.body.email });
      if (!user) {
        user = new User({
					email: req.body.email,
                    name: req.body.name,
                    contact: req.body.contact,
                    password: req.body.password,
					role: req.body.role
                });
                console.log(name);
				User.create(user)
            .then(user => {
                // console.log(user);
                let clientUserData = {
                    name: user.name,
                    _id: user._id,
                    email: user.email,
                    contact: user.contact,
                }
                jwt.sign(clientUserData, process.env.JWT_SECRET_KEY, {expiresIn: '1h'}, (tokenError, token)=> {
                    if(tokenError){
                        // console.log(tokenError);
                        res.json({
                            status: 204,
                            error: tokenError
                        })
                    }else{
                        res.json({
                            message: "Successfully registered",
                            user: clientUserData,
                            token
                        })
                    }
                })
            })
      }
    } catch (err) {
			console.log(err);
			req.flash('toastMessage', 'Some error. Try again');
			res.redirect('back');	
		}
  }
}