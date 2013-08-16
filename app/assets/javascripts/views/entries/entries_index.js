// Template will now be formatted in Handlebars after adding the gem and renaming
// templates/entries/index.hbs

Raffler.Views.EntriesIndex = Backbone.View.extend({

  template: HandlebarsTemplates['entries/index'],
  render: function () {
    // taking div and setting the html of it
    $(this.el).html(this.template());
    return this;
  }

});
