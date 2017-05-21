const io = require('socket.io')();
const UserController = require('./controllers/user');
const passport = require('passport');
const socketPort = require('./config/config').socketPort;
const socketHost = require('./config/config').socketHost;

const requireAuth = passport.authenticate('jwt', {session: false});


io.on('connection', client => {
  client.on('groupChatMsg', data => {
    console.log(data);
    io.emit('groupChatMsg', data);
  });
});

io.listen(socketPort);
console.log(`Socket start listening on ${socketHost}`);


