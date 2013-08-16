Raffler.Views.EntriesIndex = Backbone.View.extend({
  template: HandlebarsTemplates['entries/index'],

  initialize: function () {
    this.collection.on('reset', this.render, this);
  },

  render: function () {
    // taking div and setting the html of it
    $(this.el).html(this.template({collection: this.collection}));
    return this;
  }
});
