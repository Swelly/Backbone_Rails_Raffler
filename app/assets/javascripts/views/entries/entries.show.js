Raffler.Views.EntryShow = Backbone.View.extend({
  template: HandlebarsTemplates['entries/show'],

  initialize: function () {
  },

  render: function () {
    $(this.el).html(this.template());
    return this;
  }
});
