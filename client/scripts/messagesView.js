// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    var allMessages = Messages._data;
    for (var i = 0; i < allMessages.length; i++) {
      var message = allMessages[i];
      //console.log(message);
      this.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // var $message = $("should be a template from MessageView.render")
    // console.log(message);
    var $message = $(MessageView.render(message));
    //add the message to the chat;
    $message.appendTo(this.$chats);
    // var message = MessageView.render(message);
    // console.log('message ', message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};