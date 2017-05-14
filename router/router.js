const express = require('express');

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
  authRoutes.post('/register', (req, res, next) => {
    res.send('REGISTER');
  });
  
  // Login route
  authRoutes.post('/login', (req, res, next) => {
    res.send('LOGIN');
  });
  
  //= ========================
  // User Routes
  //= ========================
  
  // Set user routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/user', userRoutes);
  
  // View user profile route
  userRoutes.get('/:userId', (req, res, next) => {
    res.send('USER');
  });
  
  //= ========================
  // Chat Routes
  //= ========================
  
  // Set chat routes as a subgroup/middleware to apiRoutes
  apiRoutes.use('/chat', chatRoutes);
  
  chatRoutes.get('/', (req, res, next) => {
    res.send('CHAT');
  });
};

