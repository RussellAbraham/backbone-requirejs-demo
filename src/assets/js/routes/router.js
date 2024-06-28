define(['backbone', 'assets/js/views/container', 'assets/js/views/home', 'assets/js/views/about', 'assets/js/views/contact'], function (Backbone, Container, HomeView, AboutView, ContactView) {

	var Router = Backbone.Router.extend({
		routes: {
			'': 'home',
			'about': 'about',
			'contact': 'contact'
		},
		initialize: function () {
			this.container = new Container({ el: $('#article') });
			this.homeView = new HomeView();
			this.aboutView = new AboutView();
			this.contactView = new ContactView();
		},
		home: function () {
			this.container.render(this.homeView);
		},
		about: function () {
			this.container.render(this.aboutView);
		},
		contact : function(){
			this.container.render(this.contactView);
		}
	});

	return Router;

});
