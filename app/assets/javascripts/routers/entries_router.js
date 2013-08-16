Raffler.Routers.Entries = Backbone.Router.extend({

  routes: {
    '': 'index',
    'entries/:id': 'show'
  },
  // "Methods" (type of functions within an Object - Raffler)
  index: function () {
    var view = new Raffler.Views.EntriesIndex();
    $('#container').html(view.render().el);
  },
  show: function (id) {
    alert("Hello from Show Number: " + id); // Ex: http://localhost:3000/#entries/1
  }

});
