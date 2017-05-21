class ChatCtrl {
  constructor(chatService) {
    console.log('ChatCtrl is up!');

    this.chatService = chatService;
  }
}

angular
  .module('chatModule')
  .component('chatComponent', {
    selector: 'chatComponent',
    template: require('./chat.component.html'),
    controller: ChatCtrl
  });