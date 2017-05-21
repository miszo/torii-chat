import './chat.component.scss';

class ChatCtrl {
  constructor(chatService, userService) {
    console.log('ChatCtrl is up!');

    this.chatService = chatService;
    this.userService = userService;

    this.username = null;
    this.message = null;
  }

  $onInit() {
    this.userService.getUserData()
      .then(user => this.username = user.username);

    this.chatService.getChatMessages();
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
    selector: 'chatComponent',
    // bindings: { messageList: '<' },
    template: require('./chat.component.html'),
    controller: ChatCtrl
  });
