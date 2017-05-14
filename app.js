const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

// Connect to mongoDb
mongoose.connect(config.database);

// On connection
mongoose.connection.on('connected', () => {
  console.log(`Connected to database ${config.database}`);
});

// On error
mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});

const app = express();
const router = require('./router/router');

// Log every http request using morgan
app.use(logger('dev'));

// CORS middleware
app.use(cors());

// Set Static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser middleware
app.use(bodyParser.json());

// Password middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Routes
router(app);

// Start Server
const server = app.listen(config.port, () => {
  console.log(`Your server is running on port ${config.port}.`);
});

module.exports = server;


