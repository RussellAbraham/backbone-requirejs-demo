define(['backbone', 'assets/js/views/container', 'assets/js/views/home'],function(Backbone, Container, HomeView){	
	
	var Router = Backbone.Router.extend({						
		routes : { 
			'' : 'home', 
			'about':'about',
			'contact' : 'contact'
		},		
		initialize : function(){			
			this.container = new Container({ el : $('#article') });	
			this.homeView = new HomeView();
		},
		home : function(){
			this.container.render(this.homeView);
		}
  }); 
	
	return Router;
	
});
