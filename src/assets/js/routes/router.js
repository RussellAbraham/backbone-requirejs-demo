define(['backbone', 'assets/js/views/container'],function(Backbone, Container){	
	
	var Router = Backbone.Router.extend({						
		routes : { 
			'' : 'home', 
			'about':'about',
			'contact' : 'contact'
		},		
		initialize : function(){			
			this.container = new Container({ el : $('#article') });	
		}
  }); 
	
	return Router;
	
});
