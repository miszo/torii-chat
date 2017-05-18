const AuthenticationController = require('../controllers/authentication');
const UserController = require('../controllers/user');
const express = require('express');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app) {
  // Initialize route groups
  const apiRoutes = express.Router();
  const authRoutes = express.Router();
  const userRoutes = express.Router();
  const chatRoutes = express.Router();
  
  // Set url for API group routes
  app.use('/api', apiRoutes);
  
  //= ========================
  // Auth Routes
  //= ========================
  
  // Set auth routes as subgroup/middleware to apiRoutes
  apiRoutes.use('/auth', authRoutes);
  
  // Registration route
  authRoutes.post('/register', AuthenticationController.register);

  // Login route
  authRoutes.post('/login', AuthenticationController.login);
  
  //= ========================
  // User Routes
  //= ========================
  
  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);
  
  // View user profile route
  userRoutes.get('/', requireAuth, UserController.viewProfile);

  
  //= ========================
  // Chat Routes
  //= ========================
  
  // Set chat routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/chat', chatRoutes);
  
  chatRoutes.get('/', (req, res, next) => {
    res.send('CHAT');
  });
};

