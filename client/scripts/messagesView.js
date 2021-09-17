// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    if (data === undefined) {
      data = Messages._data;
    }
    console.log('first message', data[0]);
    this.$chats.empty();
    for (var i = 0; i < data.length; i++) {
      var message = data[i];
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