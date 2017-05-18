const User = require('../models/user');
const setUserInfo = require('../helpers/user').setUserInfo;

//= =======================================
// User/ route
//= =======================================
function viewProfile(req, res, next) {
  const userToReturn = setUserInfo(req.user);

  return res.status(200).json({
    success: true,
    user: userToReturn
  });

}

module.exports = { viewProfile };