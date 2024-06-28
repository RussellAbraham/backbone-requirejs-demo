define(["backbone", "assets/js/models/contact", "text!assets/html/contact.html"], function (Backbone, ContactModel, template) {

	var ContactView = Backbone.View.extend({

		model: new ContactModel(),

		template: _.template($(template).html()),

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

	return ContactView;

});
