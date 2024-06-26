define(["backbone"], function (Backbone) {
	var AboutModel = Backbone.Model.extend({
		defaults: {
			features: [
				"Modular code structure with RequireJS",
				"Efficient data models and views with Backbone.js",
				"Responsive design with Bootstrap 4",
				"Interactive user interface with jQuery",
				"Dynamic content loading with RequireJS text plugin"
			]
		}
	});

	return AboutModel;
});
