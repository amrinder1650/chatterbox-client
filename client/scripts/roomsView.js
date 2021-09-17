// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.

    // var Rooms = [];

    for (var i = 0; i < Messages['_data'].length; i++) {
      Rooms._data.push(Messages['_data'][i].roomname);
    }


    var set = new Set(Rooms._data);
    Rooms._data = [...set];
    console.log(Rooms._data);

    for (var i = 0; i < Rooms._data.length; i++) {
      RoomsView.renderRoom(Rooms._data[i]);
    }

  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    $('#roomSelector').append($('<option></option>').val(roomname).html(roomname));


  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.

    var selectedMessages = [];

    var selectedRoom = document.getElementById('roomSelector').value;
    for (var i = 0; i < Messages._data.length; i++) {
      if (Messages._data[i].roomname === selectedRoom) {
        selectedMessages.push(Messages._data[i]);
      }
    }

    console.log(selectedMessages);

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    $('#rooms button').click(function () {
      // $feed.empty();
      // $updateFeed.html("Update Feed");
      // renderFeed();
      var newRommname = prompt('Enter name of the new room');
      var newRoomMessage = 'Hello, welcome to this new room!';

      var message = {};

      message['username'] = App.username;
      message['text'] = newRoomMessage;
      message['roomname'] = newRommname;

      Parse.create(message, function() {
        console.log('New Room Created');
      });


    });


  }

};
