const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');
const setUserInfo = require('../helpers/user').setUserInfo;


// Generate JWT
// TO-DO Add issuer and audience
function generateToken(user) {
  return jwt.sign(user, config.secret, {
    expiresIn: 604800 // in seconds
  });
}

//= =======================================
// Login Route
//= =======================================
function login(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;
  
  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }
    
    if (!user) {
      return res.status(404).json({success: false, msg: 'User not found'});
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      
      if (isMatch) {
        const token = generateToken(user);
        
        res.status(200).json({
          success: true,
          token: `JWT ${token}`,
          user: setUserInfo(user)
        });
        User.updateLastLoginDate(user, (err) => {
          if (err) {
            throw err;
          }
        });
      } else {
        return res.status(401).json({succes: false, msg: 'Wrong password'});
      }
      
      
    });
    
  });
}
//= =======================================
// Registration Route
//= =======================================
function register(req, res, next) {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  });
  
  // Return error if no email provided
  if (!newUser.email) {
    return res.status(422).json({success: false,  msg: 'You must enter an email address.' });
  }
  
  // Return error if no username provided
  if (!newUser.username) {
    return res.status(422).json({success: false,  msg: 'You must enter your username.' });
  }
  
  // Return error if full name not provided
  if (!newUser.profile.firstName || !newUser.profile.lastName) {
    return res.status(422).json({success: false,  msg: 'You must enter your full name.' });
  }
  
  // Return error if no password provided
  if (!newUser.password) {
    return res.status(422).json({success: false,  msg: 'You must enter a password.' });
  }
  
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.status(422).json({success: false, msg:'Failed to register user'});
    } else {
      res.status(201).json({
        success: true,
        msg:'User registered',
        token: `JWT ${generateToken(user)}`,
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          firstName: user.profile.firstName,
          lastName: user.profile.lastName
        }
      });
    }
  });
}

module.exports = {
  login,
  register
};


