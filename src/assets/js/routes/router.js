define(['backbone', 'assets/js/views/container', 'assets/js/views/home', 'assets/js/views/about'],function(Backbone, Container, HomeView, AboutView){	
	
	var Router = Backbone.Router.extend({						
		routes : { 
			'' : 'home', 
			'about':'about',
			'contact' : 'contact'
		},		
		initialize : function(){			
			this.container = new Container({ el : $('#article') });	
			this.homeView = new HomeView();
			this.aboutView = new AboutView();
		},
		home : function(){
			this.container.render(this.homeView);
		},
		about : function(){
			this.container.render(this.aboutView);
		}
  }); 
	
	return Router;
	
});
