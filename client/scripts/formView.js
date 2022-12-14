// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    //var message = {}
    var message = {};

    message['username'] = App.username;
    message['text'] = document.getElementById('message').value;
    message['roomname'] = RoomsView.selectedRoom;
    //if no room is selected, roomname should be lobby of default
    //if some room is selected, roomname should be selected room name

    Parse.create(message, function() {
      console.log('Success');
    });

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};