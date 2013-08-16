Raffler.Routers.Entries = Backbone.Router.extend({

  routes: {
    '': 'index',
    'entries/:id': 'show'
  },
  // "Methods" (type of functions within an Object - Raffler)
  index: function () {
    alert("Hello from Index!");
  },
  show: function (id) {
    alert("Hello from Show Number: " + id); // Ex: http://localhost:3000/#entries/1
  }

});
