const io = require('socket.io-client');
const socketHost = process.env.IO_HOST || 'http://localhost:4000';
const socket = io(socketHost);

class ChatService {
  constructor(userService) {
    this.userService = userService;
  }

  sendGroupMsg(sender, message) {
    socket.emit('groupChatMsg', {
        sender,
        message
      });
  }

}

angular
  .module('chatModule')
  .service('chatService', ChatService);

