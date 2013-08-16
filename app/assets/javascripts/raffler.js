// Generated from rails g backbone:install --javascript
// - as well as all directories in this javascripts fldr


// Raffler bound to window with these Models - Collections, Views and Routers.
window.Raffler = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Raffler.Routers.Entries();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Raffler.initialize();
});
