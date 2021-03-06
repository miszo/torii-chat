import './chat.component.scss';
const io = require('socket.io-client');
const socketHost = process.env.IO_HOST || 'http://localhost:4000';
const socket = io(socketHost);

class ChatCtrl {
  constructor($timeout, chatService, userService) {
    this.chatService = chatService;
    this.userService = userService;
    this.timeout = $timeout;

    this.username = null;
    this.message = null;
    this.messageList = [];
  }

  $onInit() {
    this.userService.getUserData()
      .then(user => this.username = user.username);

    socket.on('groupChatMsg', data => {
     this.timeout(() => this.messageList = [...this.messageList, data], 0);
    });
  }

    sendGroupMsg() {
      if (!this.message) {
        return;
      }
      this.chatService.sendGroupMsg(this.username, this.message)
      this.message = null;
    }

}

angular
  .module('chatModule')
  .component('chatComponent', {
    selector: 'chat-component',
    template: require('./chat.component.html'),
    controller: ChatCtrl
  });
