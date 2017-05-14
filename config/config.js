const secret = process.env.SECRET || 'shhh it is a secret';
const database = process.env.MONGODB_URI || 'mongodb://localhost:27017/torii-chat';
const port = process.env.PORT || 3000;

module.exports = {
  secret,
  database,
  port
};