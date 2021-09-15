// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.
//import MessageView from ('messagesView.js');

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
  },



  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data);
      //use messages.js to handle the array of messages
      //pass data to the Messages._data



      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
        Messages['_data'].push(data[i]);
      }
      MessagesView.render();
      //return data[i];
      //pass data[i] as an argument to the messagesview.initialize or render


      // Messages[_data] = data;
      // Messages[returnOneMessage()];
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
