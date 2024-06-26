define(["backbone", "assets/js/models/home", "text!assets/html/home.html"], function (Backbone, HomeModel, template) {

	var HomeView = Backbone.View.extend({
		model: new HomeModel(),
		template: _.template($(template).html()),
		initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.append(this.template(this.model.toJSON()));
			return this;
		}
	});

	return HomeView;

});