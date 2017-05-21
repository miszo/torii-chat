const io = require('socket.io-client');
const socketHost = process.env.IO_HOST || 'http://localhost:4000';
const socket = io(socketHost);

class ChatService {
  constructor(userService) {
    console.log('ChatService is up!');
    this.userService = userService
    this.messageList = [{sender: 'miszo', message: 'Testowa wiadomosć'}, {sender: 'test', message: 'Testowa wiadomosć od kogoś innego'}];

    socket.on('groupChatMsg', data => {
      this.messageList.push(data);
      console.log(this.messageList);
    });
  }


  
  sendGroupMsg(sender, message) {
    socket.emit('groupChatMsg', {
        sender,
        message
      });
  }

  getChatMessages() {
    return this.messageList;
  }

}

angular
  .module('chatModule')
  .service('chatService', ChatService);

