define(["backbone", "assets/js/models/about", "text!assets/html/about.html"], function (Backbone, AboutModel, template) {

	var AboutView = Backbone.View.extend({

		model: new AboutModel(),

		template: _.template($(template).html()),

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

	return AboutView;

});
